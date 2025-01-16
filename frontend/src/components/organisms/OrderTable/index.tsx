import EyeIcon from "@/assets/icons/EyeIcon"
import PenIcon from "@/assets/icons/PenIcon"
import TrashIcon from "@/assets/icons/TrashIcon"
import Checkbox from "@/components/atoms/Checkbox"
import { ViewOrderModel } from "@/models/order"
import { useMemo } from "react"
import { Column, Row, useTable } from "react-table"
import { ActionRow, CheckColumnStyle, IDCellStyle, OnLeftCellStyle, OnLeftHeaderStyle, EmptyInfoCellStyle, SwapIconContainer, HeaderStyle, TableContainerStyle } from "./style"
import Table from "@/components/molecules/Table"
import { OrderTableProps } from "./helpers/order-table-props"
import SwapIcon from "@/assets/icons/SwapIcon"
import { useDispatch, useSelector } from "react-redux"
import { updateOrderQuery } from "@/store/table-queries"
import { StoreTypeHelper } from "@/store"
import { OrderQueries } from "@/store/helpers/table-queries-data"
import StatusCard from "@/components/atoms/StatusCard"
import { warningAlert } from "@/store/toast"
import IconButton from "@/components/atoms/IconButton"

export default function OrderTable(props: OrderTableProps) {
    const orderTableQuery = useSelector<StoreTypeHelper>(state => state.tableQueries.orders) as OrderQueries

    const dispatch = useDispatch()

    function handleSetTableOrder(orderBy: keyof ViewOrderModel) {
        if(orderBy === orderTableQuery.order.by) {
            dispatch(updateOrderQuery({ order: {by: orderBy, asc: !orderTableQuery.order.asc} }))
        } else dispatch(updateOrderQuery({ order: { by: orderBy, asc: true}}))
    }

    function handleCheckboxChange (id: number) {
        if(props.onCheckChange) {
            props.onCheckChange({ ...props.checkedItems, [id]: !props.checkedItems[id]})
        }

    }

    function handleOnSelectAll(value: boolean) {
        if(props.onSelectAll) {
            props.onSelectAll(value)
        }
    }


    const columns = useMemo(() => [
        {
            Header: <CheckColumnStyle>
                <Checkbox value={props.allSelected} onChange={(value) => handleOnSelectAll(value)}/>
            </CheckColumnStyle>,
            
            Cell: ({row}: {row: Row<ViewOrderModel & {_order: ViewOrderModel}>}) => (
                <CheckColumnStyle>
                    <Checkbox 
                        value={props.checkedItems[row.original._order.id ?? 0]} 
                        onChange={() => handleCheckboxChange(row.original._order.id as number)}
                    />
                </CheckColumnStyle>
            ),
            accessor: 'checkbox',
            width: '3.57%',
        },
        {
            Header: 'ID',
            accessor: 'id',
            width: '3.57%',
        },
        {
            Header: <OnLeftHeaderStyle onClick={() => handleSetTableOrder('name')}>
                Nome
                <SwapIconContainer>
                    <SwapIcon size={20}/>
                </SwapIconContainer>
            </OnLeftHeaderStyle>,
            accessor: 'name',
            width: '14.28%'
        },
        {
            Header: <OnLeftHeaderStyle onClick={() => handleSetTableOrder('isOpened')}>
                Status
                <SwapIconContainer>
                    <SwapIcon size={20}/>
                </SwapIconContainer>
            </OnLeftHeaderStyle>,
            accessor: 'isOpened',
            width: '14.28%'
        },
        {
            Header: <OnLeftHeaderStyle onClick={() => handleSetTableOrder('attendantId')}>
                Atendente
                <SwapIconContainer>
                    <SwapIcon size={20}/>
                </SwapIconContainer>
            </OnLeftHeaderStyle>,
            accessor: 'attendant',
            width: '14.28%',

        },
        {
            Header: <HeaderStyle onClick={() => handleSetTableOrder('createdAt')}>
                Data de Criação
                <SwapIconContainer>
                    <SwapIcon size={20}/>
                </SwapIconContainer>
            </HeaderStyle>,
            accessor: 'createdAt',
            width: '14.28%',
            
        },

        {
            Header: 'Ações',
            width: '7%',
            Cell: ({row}: {row: Row<ViewOrderModel & {_order: ViewOrderModel}>}) => (
                <ActionRow >
                    <IconButton onClick={() => props.onView(row.original._order)}>
                        <EyeIcon size={24} styleType="text"/>
                    </IconButton>
                    <IconButton 
                        onClick={() => props.onUpdate(row.original._order)} 
                        onDenyClick={() => dispatch(warningAlert('Não é possível editar pedidos fechados!'))}
                        disabled={!row.original._order.isOpened}
                    >
                        <PenIcon size={24} styleType={row.original._order.isOpened ? 'text' : 'secondary'}/>
                    </IconButton>
                    <IconButton 
                        onClick={() => props.onDelete(row.original._order)} 
                        onDenyClick={() => dispatch(warningAlert('Não é possível remover pedidos fechados!'))}
                        disabled={!row.original._order.isOpened}
                    >
                        <TrashIcon 
                            size={24} 
                            styleType={row.original._order.isOpened ? 'danger' : 'secondary'}
                        />
                    </IconButton>
                </ActionRow>
                
            )
        }
    ] as Column[], [ props, dispatch ])

    const data = useMemo(() => {
        if(Array.isArray(props.orders)) {
            return props.orders?.map(
                order => ({
                    id: <IDCellStyle>{order.id}</IDCellStyle>,
                    name: <OnLeftCellStyle>{order.name}</OnLeftCellStyle>,
                    isOpened: <StatusCard opened={order.isOpened}/>,
                    attendant: <OnLeftCellStyle>{
                        order.attendant?.name ?? <EmptyInfoCellStyle>Não informado</EmptyInfoCellStyle>
                    }</OnLeftCellStyle> 
                    ,
                    createdAt: order.createdAt?.toLocaleDateString(),
                    _order: order
                })
            )    
        }
        return []
    }, [props.orders])

    const tableInstance = useTable({ columns, data })

    return  <TableContainerStyle>
        <Table tableInstance={tableInstance} loading={props.loading}/>
    </TableContainerStyle>
}