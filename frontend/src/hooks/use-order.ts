import { db } from "@/db";
import { CreateOrderModel, UpdateOrderModel, ViewOrderModel } from "@/models/order"
import { createOrder, deleteOrders, getOrders, updateOrder } from "@/services/orders";
import { StoreTypeHelper } from "@/store";
import { OrderQueries } from "@/store/helpers/table-queries-data";
import { errorAlert, successAlert } from "@/store/toast";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useOrder() {
  const orderTableQuery = useSelector<StoreTypeHelper>(
    (state) => state.tableQueries.orders
  ) as OrderQueries;
  
  const [loading, setLoading] = useState(false)
  const [alreadyLoaded] = useState(false)
  const [listLoading, setListLoading] = useState(false)
  const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dispatch = useDispatch()

  // FILTRAGEM
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const orders: (ViewOrderModel)[] = (useLiveQuery(() => db.orders?.toArray()) ?? [] as ViewOrderModel[]);

  const filteredOrders: (ViewOrderModel)[] = useMemo(() => {
    let ordersToFilter = orders
    
    // FILTRAGEM & PESQUISA
    ordersToFilter = ordersToFilter.filter((order) => {
      // Por Atendente
      if (
        orderTableQuery.filter.attendantId &&
        order.attendantId !== orderTableQuery.filter.attendantId
      ) {
        return false;
      }

      // Por Status
      if (
        orderTableQuery.filter.isOpened !== undefined &&
        order.isOpened !== orderTableQuery.filter.isOpened
      ) {
        return false;
      }
      // Por Data de Criação
      if (orderTableQuery.filter.createdAt) {
        const date = new Date();

        switch (orderTableQuery.filter.createdAt) {
          case "today":
            return (
              order.createdAt?.getDate() === date.getDate() &&
              order.createdAt.getMonth() === date.getMonth() &&
              order.createdAt.getFullYear() === date.getFullYear()
            );
          case "week":
            const weekStart = new Date(date);
            weekStart.setDate(date.getDate() - date.getDay());
            weekStart.setHours(0, 0, 0, 0);

            const weekEnd = new Date(date);
            weekEnd.setDate(date.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);

            if (order.createdAt) {
              return order.createdAt >= weekStart && order.createdAt <= weekEnd;
            } else return false;
          case "month":
            return (
              order.createdAt?.getMonth() === date.getMonth() &&
              order.createdAt.getFullYear() === date.getFullYear()
            );
        }
      }

      // Por Pesquisa
      if (
        searchValue !== undefined &&
        !(
          order.name.toLowerCase().includes(searchValue) ||
          order.attendant?.name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          String(order.id).includes(searchValue)
        )
      ) {
        return false;
      }
      return true;
    });

    // ORDENAÇÃO
    if (orderTableQuery.order.by !== undefined) {
      ordersToFilter = ordersToFilter.sort(
        (a: ViewOrderModel, b: ViewOrderModel) => {
          switch (orderTableQuery.order.by) {
            case "name":
              return orderTableQuery.order.asc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
            case "attendantId":
              return orderTableQuery.order.asc
                ? (a.attendant?.name || '').localeCompare(b.attendant?.name || '')
                : (b.attendant?.name || '').localeCompare(a.attendant?.name || '');
            case "isOpened":
              return orderTableQuery.order.asc
                ? Number(a.isOpened) - Number(b.isOpened)
                : Number(b.isOpened) - Number(a.isOpened);
            case "createdAt":
              return orderTableQuery.order.asc
                ? (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0)
                : (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);
            default:
              return (a.id ?? 0) - (b.id ?? 0);
          }
        }
      );
    }
    return ordersToFilter
  }
  , [orderTableQuery, orders, searchValue])

  const paginatedFilteredOrders = useMemo(() => {
    // PAGINAÇÃO
    let ordersToSlice = filteredOrders

    const startRowIndex = (currentPage - 1) * orderTableQuery.limit;
    const endRowIndex = startRowIndex + orderTableQuery.limit;
    ordersToSlice = ordersToSlice.slice(startRowIndex, endRowIndex);

    return ordersToSlice;
  }, [filteredOrders, orderTableQuery.limit, currentPage])

  async function create(createOrderModel: CreateOrderModel) {
    setLoading(true)

    try {
      await createOrder(createOrderModel)
      dispatch(successAlert('Pedido criado!'))
      await getAll()
    } catch (error) {
      if(error instanceof Error && error.message) {
        dispatch(errorAlert(error.message))
      } else dispatch(errorAlert('Não foi possível criar pedido!'))
    } finally {
      setLoading(false)
    }
  }

  async function getAll() {
    setListLoading(true)

    try {
      if(!listLoading) {
        await db.orders.clear()
        await db.orders.bulkPut((await getOrders() ?? []))
      }
    } catch (error) {
      if(error instanceof Error && error.message) {
        dispatch(errorAlert(error.message))
      } else dispatch(errorAlert('Não foi possível obter pedidos!'))
    } finally {
      setListLoading(false)
      setAlreadyListLoaded(true)
    }
  }

  async function update(id: number, updateOrderModel: UpdateOrderModel) {
    setLoading(true)

    try {
      await updateOrder(id, updateOrderModel)
      dispatch(successAlert("Pedido atualizado!"));
      await getAll()
    } catch (error) {
      if(error instanceof Error) {
        dispatch(errorAlert(error.message))
      } else dispatch(errorAlert("Não foi possível atualizar pedidos!"));
    } finally {
      setLoading(false)
    }
  }
  
  async function removeMany(ordersId: number[]){
    setLoading(true)

    try {
      await deleteOrders(ordersId)
      dispatch(successAlert(ordersId.length > 1 ? "Pedidos removidos!" : "Pedido removido!"));
      await getAll()
    } catch (error) {
      if(error instanceof Error) {
        dispatch(errorAlert(error.message))
      } else dispatch(errorAlert(ordersId.length > 1 ? 
        "Não foi possível remover pedidos!" : 
        "Não foi possível remover pedido!"));
    } finally {
      setLoading(false)
    }
  }

  return {
      create,
      getAll,
      update,
      removeMany,

      loading,
      alreadyLoaded,
      listLoading,
      alreadyListLoaded,
      orders,
      filteredOrders,
      paginatedFilteredOrders,
      
      searchValue,
      setSearchValue,
      currentPage,
      setCurrentPage
  }
}