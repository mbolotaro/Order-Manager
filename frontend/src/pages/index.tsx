import TableInfo from "@/components/Molecules/TableInfo";
import { CRUDTemplateStyle, TableToolsStyle } from "./_helpers/style";
import OrderTable from "@/components/Organisms/OrderTable";
import Button from "@/components/Atoms/Button";
import SearchInput from "@/components/Molecules/SearchInput";
import Divider from "@/components/Atoms/Divider";
import Plus from "@/assets/icons/Plus";
import { useEffect, useMemo, useState } from "react";
import DefaultLayout from "@/components/Templates/Default";
import Head from "next/head";
import ViewOrderModal from "@/components/Organisms/ViewOrderModal";
import OrderModal from "@/components/Organisms/OrderModal";
import DeleteOrderModal from "@/components/Organisms/DeleteOrderModal";
import { ViewOrderModel } from "@/models/order.interface";
import { useOrder } from "@/hooks/use-order";
import { CRUDOrderModalTypes } from "@/components/Organisms/OrderModal/helpers/crud-order-modal-props.interface";
import { TableInfoType } from "@/components/Molecules/TableInfo/helpers/table-info-props.interface";
import TrashIcon from "@/assets/icons/TrashIcon";
import TablePagination from "@/components/Molecules/TablePagination";

export default function OrderCRUD() {
    
    const [ viewModalOpened, setViewModalOpened ] = useState(false)
    const [ modalOpened, setModalOpened ] = useState(false)
    const [ deleteModalOpened, setDeleteModalOpened ] = useState(false)
    
    const [ currentOrder, setCurrentOrder ] = useState<ViewOrderModel | undefined>(undefined)
    const [ alreadyListLoaded, setAlreadyLisyLoaded ] = useState(false)
    const [ currentAction, setCurrentAction ] = useState<CRUDOrderModalTypes>("create")
    const [ checkedItems, setCheckedItems ] = useState<number[]>([])
    
    const [ isDeleteMany, setIsDeleteMany ] = useState(false)

    const {
        getAll,
        orders,
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
                setAlreadyLisyLoaded(true)
            }
        }

        fetchData()
    }, [orders, alreadyListLoaded, getAll])

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
    <DefaultLayout>
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
                                icon={<Plus size={24} styleType="light"/>} density="compact" onClick={() => handleOnCreateOrder()}
                            />
                        </div>
                        <div>
                            <SearchInput/>
                        </div>
                    </>
                }
            </TableToolsStyle>
            <OrderTable
                orders={orders}
                onView={handleOnViewOrder} 
                onUpdate={handleOnUpdateOrder} 
                onDelete={handleOnDeleteOrder}
                onCheckChange={handleOnCheckChange}
            />
            <TablePagination/>
        </CRUDTemplateStyle>
    </DefaultLayout>
    <ViewOrderModal 
        opened={viewModalOpened} 
        close={handleOnClose} 
        order={currentOrder}
    />
    <OrderModal 
        opened={modalOpened} 
        close={handleOnClose} 
        action={currentAction} 
        order={currentOrder}
    />
    <DeleteOrderModal 
        many={isDeleteMany} 
        opened={deleteModalOpened} 
        close={handleOnClose} 
        order={currentOrder} 
        ordersId={checkedItems}
    />
    </>
}