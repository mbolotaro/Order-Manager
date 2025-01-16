import EyeIcon from "@/assets/icons/EyeIcon"
import PenIcon from "@/assets/icons/PenIcon"
import TrashIcon from "@/assets/icons/TrashIcon"
import Checkbox from "@/components/atoms/Checkbox"
import { ViewOrderModel } from "@/models/order"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Column, Row, useTable } from "react-table"
import { ActionIcon, ActionContainer, CheckColumnStyle, IDCellStyle, OnLeftCellStyle, OnLeftHeaderStyle, EmptyInfoCellStyle, SwapIconContainer, HeaderStyle, TableContainerStyle } from "./style"
import Table from "@/components/molecules/Table"
import { OrderTableProps } from "./helpers/order-table-props"
import SwapIcon from "@/assets/icons/SwapIcon"
import { useDispatch, useSelector } from "react-redux"
import { updateOrderQuery } from "@/store/table-queries"
import { StoreTypeHelper } from "@/store"
import { OrderQueries } from "@/store/helpers/table-queries-data"
import StatusShow from "@/components/atoms/StatusShow"
import { warningAlert } from "@/store/toast"

export default function OrderTable(props: OrderTableProps) {

    const [ checkboxes, setCheckboxes ] = useState<Record<number, boolean>>({})
    const [ allSelected, setAllSelected ] = useState(false)

    const orderTableQuery = useSelector<StoreTypeHelper>(state => state.tableQueries.orders) as OrderQueries

    const dispatch = useDispatch()

    function handleSetTableOrder(orderBy: keyof ViewOrderModel) {
        if(orderBy === orderTableQuery.order.by) {
            dispatch(updateOrderQuery({ order: {by: orderBy, asc: !orderTableQuery.order.asc} }))
        } else dispatch(updateOrderQuery({ order: { by: orderBy, asc: true}}))
    }

    function handleUpdate(order: ViewOrderModel) {
        if(!order.isOpened) {
            dispatch(warningAlert('Não é possível editar pedidos fechados!'))
        } else props.onUpdate(order)
    }

    function handleDelete(order: ViewOrderModel) {
        if(!order.isOpened) {
            dispatch(warningAlert('Não é possível remover pedidos fechados!'))
        } else props.onDelete(order)
    }

    useEffect(() => {
        const updatedCheckboxes = props.orders.reduce((acc, order) => {
            if(typeof order.id === 'number') {
                acc[order.id] = allSelected
            }

            return acc;
        }, {} as Record<number, boolean>)

        setCheckboxes(updatedCheckboxes)

        if(props.onCheckChange) {
            props.onCheckChange(updatedCheckboxes)
        }


    }, [allSelected, setCheckboxes])

    const handleCheckboxChange = useCallback((id: number) => {
        setCheckboxes((prev) => {
            const updatedCheckboxes: Record<number, boolean> = {
                ...prev,
                [id]: !prev[id]
            } 
        
            if(props.onCheckChange) {
                props.onCheckChange(updatedCheckboxes)
            }

            return updatedCheckboxes;
        })

    }, [props])

    const columns = useMemo(() => [
        {
            Header: <CheckColumnStyle>
                <Checkbox value={allSelected} onChange={(value) => setAllSelected(value)}/>
            </CheckColumnStyle>,
            
            Cell: ({row}: {row: Row<ViewOrderModel & {_order: ViewOrderModel}>}) => (
                <CheckColumnStyle>
                    <Checkbox 
                        value={checkboxes[row.original._order.id ?? 0]} 
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
            width: '7.14%',
            Cell: ({row}: {row: Row<ViewOrderModel & {_order: ViewOrderModel}>}) => (
                <ActionContainer>
                    <ActionIcon onClick={() => props.onView(row.original._order)}>
                        <EyeIcon size={24}/>
                    </ActionIcon>
                    <ActionIcon onClick={() => handleUpdate(row.original._order)}>
                        <PenIcon size={24} styleType={row.original._order.isOpened ? 'text' : 'secondary'}/>
                    </ActionIcon>
                    <ActionIcon onClick={() => handleDelete(row.original._order)}>
                        <TrashIcon size={24} styleType={row.original._order.isOpened ? 'text' : 'secondary'}/>
                    </ActionIcon>
                </ActionContainer>
                
            )
        }
    ] as Column[], [ checkboxes, props, allSelected, handleCheckboxChange ])

    const data = useMemo(() => {
        if(Array.isArray(props.orders)) {
            return props.orders?.map(
                order => ({
                    id: <IDCellStyle>{order.id}</IDCellStyle>,
                    name: <OnLeftCellStyle>{order.name}</OnLeftCellStyle>,
                    isOpened: <StatusShow opened={order.isOpened}/>,
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