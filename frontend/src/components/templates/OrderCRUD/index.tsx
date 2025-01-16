import TableInfo from "@/components/molecules/TableInfo";
import { CRUDHeadingStyle, CRUDTemplateStyle } from "./style";
import OrderTable from "@/components/organisms/OrderTable";
import Button from "@/components/atoms/Button";
import SearchInput from "@/components/molecules/SearchInput";
import Divider from "@/components/atoms/Divider";
import PlusIcon from "@/assets/icons/PlusIcon";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import OrderModal from "@/components/templates/OrderModal";
import ConfirmDeleteModal from "@/components/organisms/ConfirmDeleteModal";
import { ViewOrderModel } from "@/models/order";
import { useOrder } from "@/hooks/use-order";
import { CRUDOrderModalTypes } from "@/components/templates/OrderModal/helpers/crud-order-modal-props";
import { TableInfoType } from "@/components/molecules/TableInfo/helpers/table-info-props";
import TrashIcon from "@/assets/icons/TrashIcon";
import TablePagination from "@/components/molecules/TablePagination";
import CogIcon from "@/assets/icons/CogIcon";
import FilterOrderModal from "@/components/templates/FilterOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypeHelper } from "@/store";
import { updateOrderQuery } from "@/store/table-queries";
import { OrderQueries } from "@/store/helpers/table-queries-data";
import Row from "@/components/atoms/Row";
import IconButton from "@/components/atoms/IconButton";
import LoadingIcon from "@/assets/icons/LoadingIcon";

export default function OrderCRUD() {

    const orderTableQuery = useSelector<StoreTypeHelper>(state => state.tableQueries.orders) as OrderQueries
    const dispatch = useDispatch()

    const [ modalOpened, setModalOpened ] = useState(false)
    const [ deleteModalOpened, setDeleteModalOpened ] = useState(false)
    const [ filterModelOpened, setFilterModalOpened ] = useState(false)
    
    const [ currentOrder, setCurrentOrder ] = useState<ViewOrderModel | undefined>(undefined)
    const [ currentAction, setCurrentAction ] = useState<CRUDOrderModalTypes>("create")
    const [ checkboxes, setCheckboxes ] = useState<Record<number, boolean>>([])

    const [allSelected, setAllSelected] = useState(false)
    
    const [ isDeleteMany, setIsDeleteMany ] = useState(false)

    const {
        getAll,
        orders,
        filteredOrders,
        paginatedFilteredOrders,
        searchValue,
        currentPage,
        listLoading,
        loading,
        alreadyListLoaded,
        setCurrentPage,
        setSearchValue,
        removeMany
    } = useOrder()

    const checkedItems = useMemo(() => Object.keys(checkboxes).filter(checkbox => !!checkboxes[Number(checkbox)]).map(checkbox => Number(checkbox)), 
        [checkboxes]
    )

    useEffect(() => {
        const updatedCheckboxes = paginatedFilteredOrders.reduce((acc, order) => {
            if(typeof order.id === 'number') {
                acc[order.id] = allSelected
            }

            return acc;
        }, {} as Record<number, boolean>)

        setCheckboxes(updatedCheckboxes)


    }, [allSelected, setCheckboxes, paginatedFilteredOrders])
    
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
        setCurrentAction('view')
        setModalOpened(true)
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
        setCheckboxes(checkboxes) 
    }

    function handleOnClose() {
        setCurrentOrder(undefined)
        setModalOpened(false)
        setDeleteModalOpened(false)
    }

    async function handleConfirmDelete() {
        if(isDeleteMany) {
            await removeMany(checkedItems)
        } else await removeMany([currentOrder?.id as number])

        setDeleteModalOpened(false)
        setCheckboxes([])
    }

    return <>
    <Head>
        <title>Gerenciador de Pedidos</title>
    </Head>
    <CRUDTemplateStyle>
        <CRUDHeadingStyle>Pedidos</CRUDHeadingStyle>
        <TableInfo infos={tableInfos}/>
        <Divider styleType="background" size="1px"/>
        <Row $justify="space-between" $margin={{ y: '20px' }}>
            { checkedItems.length > 0 ? 
                <>
                    <Button 
                        text={`Excluir ${checkedItems.length} ${checkedItems.length > 1 ? 'pedidos' : 'pedido'}`} 
                        styleType="danger" 
                        icon={<TrashIcon size={24} styleType="light"/>} 
                        density="compact"
                        onClick={handleOnDeleteManyOrders}
                        $width="fit-content"
                        $maxWidth="10%"
                    />
                </> :
                <>
                    <Row $gap="8px">
                        <Button 
                            text="Adicionar Pedido" 
                            $width="fit-content"
                            icon={<PlusIcon size={24} styleType="light"/>} 
                            density="compact" 
                            onClick={() => handleOnCreateOrder()}
                            loading={!alreadyListLoaded || listLoading}
                        />
                        {
                            (listLoading || !alreadyListLoaded) &&
                            <>
                                <LoadingIcon size={20}/>
                                <div>Carregando...</div>
                            </>
                        }
                    </Row>
                    <Row $gap="4px" $justify="space-between" $width="40%">
                        <SearchInput 
                            value={searchValue} 
                            onChange={setSearchValue} 
                            width="90%"
                        />
                        <IconButton onClick={() => setFilterModalOpened(true)}>
                            <CogIcon size={27} styleType="text" />
                        </IconButton>
                    </Row>
                </>
            }
        </Row>
        <OrderTable
            loading={!alreadyListLoaded}
            orders={paginatedFilteredOrders}
            onView={handleOnViewOrder} 
            onUpdate={handleOnUpdateOrder} 
            onDelete={handleOnDeleteOrder}
            checkedItems={checkboxes}
            onCheckChange={handleOnCheckChange}
            allSelected={allSelected}
            onSelectAll={(value) => setAllSelected(value)}
        />
        <TablePagination
            listLength={filteredOrders.length}
            limit={orderTableQuery.limit}
            currentPage={currentPage}
            onChangePage={(value) => setCurrentPage(value ?? 1)}
            onChangeLimit={(newLimit) => dispatch(updateOrderQuery({ limit: newLimit}))}
        />
    </CRUDTemplateStyle>
    <OrderModal 
        opened={modalOpened} 
        close={handleOnClose} 
        action={currentAction} 
        order={currentOrder as ViewOrderModel}
    />
    <ConfirmDeleteModal 
        title="Excluir Pedido"
        subtitle={isDeleteMany ? `Deseja excluir ${checkedItems.length} pedidos?` : `Deseja excluir o pedido "${currentOrder?.name} ?"`}
        opened={deleteModalOpened} 
        close={handleOnClose}
        onConfirm={handleConfirmDelete}
        loading={loading}
    />
    <FilterOrderModal
        opened={filterModelOpened}
        close={() => setFilterModalOpened(false)}
    />
    </>
}