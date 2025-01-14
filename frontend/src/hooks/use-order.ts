import { db } from "@/db";
import { CreateOrderModel, IOrder, ViewOrderModel } from "@/models/order.interface"
import { createOrder, deleteOrders, getOrders, updateOrder } from "@/services/orders";
import { store } from "@/store";
import { ITableQuery } from "@/store/helpers/table-query.interface";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from 'yup'
import { cloneDeep } from 'lodash'

export const MAX_NAME_LENGTH = 50
export const MIN_NAME_LENGTH = 5

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome deve ser definido!")
    .min(
      MIN_NAME_LENGTH,
      `Nome deve ter no mínimo ${MIN_NAME_LENGTH} carácteres!`
    )
    .max(
      MAX_NAME_LENGTH,
      `Nome deve ter no máximo ${MAX_NAME_LENGTH} carácteres!`
    ),
  isOpened: yup
    .boolean()
    .transform((value) => (value === "true" ? true : false))
    .required("Status é obrigatório!"),
  attendantId: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .when(['isOpened'], {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('É obrigatório que haja um atendente em um pedido fechado!'),
      otherwise: (schema) => schema.notRequired()
    })
});

export function useOrder() {
  const orderTableQuery = useSelector<ReturnType<typeof store.getState>>(state => state.tableQueries.orders) as ITableQuery<ViewOrderModel>
  
  const [loading, setLoading] = useState(false)
  const [alreadyLoaded] = useState(false)
  const [listLoading, setListLoading] = useState(false)
  const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)
  
  // FILTRAGEM
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const orders: (ViewOrderModel)[] = (useLiveQuery(() => db.orders?.toArray()) ?? [] as ViewOrderModel[]);

  const filteredOrders: (ViewOrderModel)[] = useMemo(() => {
    let ordersToFilter: ViewOrderModel[] = cloneDeep(orders)

    ordersToFilter = ordersToFilter.filter(order => {
      if(orderTableQuery.filter.attendantId && order.attendantId !== orderTableQuery.filter.attendantId) {
        return false
      }

      if(orderTableQuery.filter.isOpened !== undefined && order.isOpened !== orderTableQuery.filter.isOpened) {
        return false
      }

      if(orderTableQuery.filter.createdAt) {
        const date = new Date()

        switch(orderTableQuery.filter.createdAt) {
          case 'today':
            return ( order.createdAt?.getDate() === date.getDate() && order.createdAt.getMonth() === date.getMonth() && order.createdAt.getFullYear() === date.getFullYear() )
          case 'week':
            const weekStart = new Date(date)
            weekStart.setDate(date.getDate() - date.getDay())
            weekStart.setHours(0, 0, 0, 0)

            const weekEnd = new Date(date)
            weekEnd.setDate(date.getDate() + 6)
            weekEnd.setHours(23, 59, 59, 999)
            
            if(order.createdAt) {
              return order.createdAt >= weekStart && order.createdAt <= weekEnd;

            } else return false
          case 'month':
            return ( order.createdAt?.getMonth() === date.getMonth() && order.createdAt.getFullYear() === date.getFullYear())
        }
      }

      return true
    })

    // ORDENAÇÃO
    if(orderTableQuery.order.by !== undefined) {
      ordersToFilter = ordersToFilter.sort((a: ViewOrderModel, b: ViewOrderModel) => {
        switch(orderTableQuery.order.by) {
          case 'name':
            return orderTableQuery.order.asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
          case 'attendantId':
            return orderTableQuery.order.asc ? a.attendant?.name?.localeCompare(b.attendant?.name) : b.attendant?.name?.localeCompare(a.attendant?.name)
          case 'isOpened':
            return orderTableQuery.order.asc
              ? Number(a.isOpened) - Number(b.isOpened)
              : Number(b.isOpened) - Number(a.isOpened);
          default: return (a.id ?? 0) - (b.id ?? 0)
        }
      })
    }


    return ordersToFilter;
  }, [orderTableQuery, orders])

  async function create(createOrderModel: CreateOrderModel) {
    setLoading(true)

    try {
      await createOrder(createOrderModel)
      await getAll()
    } catch (error) {
      throw error;
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
      throw error;        
    } finally {
      setListLoading(false)
      setAlreadyListLoaded(false)
    }
  }

  async function update(updateOrderModel: IOrder) {
    setLoading(true)

    try {
      await updateOrder(updateOrderModel)
      await getAll()
    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }
  
  async function removeMany(ordersId: number[]){
    setLoading(true)

    try {
      await deleteOrders(ordersId)
      await getAll()
    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }

  return {
      MAX_NAME_LENGTH, 
      MIN_NAME_LENGTH,
      schema,

      create,
      getAll,
      update,
      removeMany,

      loading,
      alreadyLoaded,
      listLoading,
      alreadyListLoaded,
      orders,
      filteredOrders
  }
}