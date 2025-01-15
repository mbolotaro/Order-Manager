import TableInfo from "@/components/molecules/TableInfo";
import { CRUDTemplateStyle, TableToolsStyle } from "./_helpers/style";
import OrderTable from "@/components/organisms/OrderTable";
import Button from "@/components/atoms/Button";
import SearchInput from "@/components/molecules/SearchInput";
import Divider from "@/components/atoms/Divider";
import PlusIcon from "@/assets/icons/PlusIcon";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import ViewOrderModal from "@/components/organisms/ViewOrderModal";
import OrderModal from "@/components/organisms/OrderModal";
import DeleteOrderModal from "@/components/organisms/DeleteOrderModal";
import { ViewOrderModel } from "@/models/order";
import { useOrder } from "@/hooks/use-order";
import { CRUDOrderModalTypes } from "@/components/organisms/OrderModal/helpers/crud-order-modal-props";
import { TableInfoType } from "@/components/molecules/TableInfo/helpers/table-info-props";
import TrashIcon from "@/assets/icons/TrashIcon";
import TablePagination from "@/components/molecules/TablePagination";
import CogIcon from "@/assets/icons/CogIcon";
import FilterOrderModal from "@/components/organisms/FilterOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypeHelper } from "@/store";
import { updateOrderQuery } from "@/store/table-queries";
import { OrderQueries } from "@/store/helpers/table-queries-data";

export default function OrderCRUD() {

    const orderTableQuery = useSelector<StoreTypeHelper>(state => state.tableQueries.orders) as OrderQueries
    const dispatch = useDispatch()

    const [ viewModalOpened, setViewModalOpened ] = useState(false)
    const [ modalOpened, setModalOpened ] = useState(false)
    const [ deleteModalOpened, setDeleteModalOpened ] = useState(false)
    const [ filterModelOpened, setFilterModalOpened ] = useState(false)
    
    const [ currentOrder, setCurrentOrder ] = useState<ViewOrderModel | undefined>(undefined)
    const [ currentAction, setCurrentAction ] = useState<CRUDOrderModalTypes>("create")
    const [ checkedItems, setCheckedItems ] = useState<number[]>([])
    
    const [ isDeleteMany, setIsDeleteMany ] = useState(false)

    const {
        getAll,
        orders,
        filteredOrders,
        paginatedFilteredOrders,
        searchValue,
        currentPage,
        listLoading,
        alreadyListLoaded,
        setCurrentPage,
        setSearchValue,
    } = useOrder()
    
    const tableInfos = useMemo<TableInfoType[]>(() => [
        {
            key: 'Todos os Pedidos',
            value: orders?.length
        },
        {
            key: 'Pedidos Abertos',
            value: orders?.filter(order => order.isOpened).length
        }
    ], [ orders ])

    useEffect(() => {
        const fetchData = async () => {
            if(!alreadyListLoaded) {
                getAll()
            }
        }
        
        fetchData()
    
    }, [alreadyListLoaded, getAll])

    function handleOnCreateOrder() {
        setCurrentAction('create')
        setModalOpened(true)
    }

    function handleOnUpdateOrder(order: ViewOrderModel) {
        setCurrentOrder(order)
        setCurrentAction('update')
        setModalOpened(true)
    }

    function handleOnViewOrder(order: ViewOrderModel) {
        setCurrentOrder(order)
        setViewModalOpened(true)
    }

    function handleOnDeleteOrder(order: ViewOrderModel) {
        setIsDeleteMany(false)
        setCurrentOrder(order)
        setDeleteModalOpened(true)
    }

    function handleOnDeleteManyOrders() {
        setIsDeleteMany(true)
        setDeleteModalOpened(true)
    }

    function handleOnCheckChange(checkboxes: Record<number, boolean>) {
        setCheckedItems(Object.keys(checkboxes).filter(checkbox => !!checkboxes[Number(checkbox)]).map(checkbox => Number(checkbox))) 
    }

    function handleOnClose() {
        setCurrentOrder(undefined)
        setModalOpened(false)
        setDeleteModalOpened(false)
        setViewModalOpened(false)
    }

    return <>
    <Head>
        <title>Gerenciador de Pedidos</title>
    </Head>
    <CRUDTemplateStyle>
        <h2>Pedidos</h2>
        <TableInfo infos={tableInfos}/>
        <Divider styleType="background" size="1px"/>
        <TableToolsStyle>
            { checkedItems.length > 0 ? 
                <>
                    <div>
                        <Button 
                            text={`Excluir ${checkedItems.length} ${checkedItems.length > 1 ? 'pedidos' : 'pedido'}`} 
                            styleType="danger" 
                            icon={<TrashIcon size={24} styleType="light"/>} 
                            density="compact"
                            onClick={handleOnDeleteManyOrders}
                        />
                    </div>
                </> :
                <>
                    <div>
                        <Button 
                            text="Adicionar Pedido" 
                            icon={<PlusIcon size={24} styleType="light"/>} 
                            density="compact" 
                            onClick={() => handleOnCreateOrder()}
                            loading={!alreadyListLoaded || listLoading}
                        />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <SearchInput value={searchValue} onChange={setSearchValue}/>
                        <Button
                            text=""
                            density="compact"
                            model="terciary"
                            onClick={() => setFilterModalOpened(true)}
                            icon={<CogIcon size={27} styleType="text" />}
                        />
                    </div>
                </>
            }
        </TableToolsStyle>
        <OrderTable
            loading={listLoading || !alreadyListLoaded}
            orders={paginatedFilteredOrders}
            onView={handleOnViewOrder} 
            onUpdate={handleOnUpdateOrder} 
            onDelete={handleOnDeleteOrder}
            onCheckChange={handleOnCheckChange}
        />
        <TablePagination
            listLength={filteredOrders.length}
            limit={orderTableQuery.limit}
            currentPage={currentPage}
            onChangePage={(value) => setCurrentPage(value ?? 1)}
            onChangeLimit={(newLimit) => dispatch(updateOrderQuery({ limit: newLimit}))}
        />
    </CRUDTemplateStyle>
    <ViewOrderModal 
        opened={viewModalOpened} 
        close={handleOnClose} 
        order={currentOrder}
    />
    <OrderModal 
        opened={modalOpened} 
        close={handleOnClose} 
        action={currentAction} 
        order={currentOrder as ViewOrderModel}
    />
    <DeleteOrderModal 
        many={isDeleteMany} 
        opened={deleteModalOpened} 
        close={handleOnClose} 
        order={currentOrder} 
        ordersId={checkedItems}
    />
    <FilterOrderModal
        opened={filterModelOpened}
        close={() => setFilterModalOpened(false)}
    />
    </>
}