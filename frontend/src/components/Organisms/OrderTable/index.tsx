import EyeIcon from "@/assets/icons/EyeIcon"
import PenIcon from "@/assets/icons/PenIcon"
import TrashIcon from "@/assets/icons/TrashIcon"
import Checkbox from "@/components/Atoms/Checkbox"
import { IOrder, ViewOrderModel } from "@/models/order.interface"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Column, Row, useTable } from "react-table"
import { ActionIcon, ActionContainer, CheckHeaderStyle, IDCellStyle, OnLeftCellStyle, OnLeftHeaderStyle, StatusCellStyle, EmptyInfoCellStyle, SwapIconContainer, HeaderStyle } from "./style"
import Table from "@/components/Molecules/Table"
import { IOrderTableProps } from "./helpers/order-table-props.interface"
import SwapIcon from "@/assets/icons/SwapIcon"
import { useDispatch, useSelector } from "react-redux"
import { updateOrderQuery } from "@/store/table-queries"
import { store } from "@/store"
import { ITableQuery } from "@/store/helpers/table-query.interface"


export default function OrderTable(props: IOrderTableProps) {

    const [ checkboxes, setCheckboxes ] = useState<Record<number, boolean>>({})
    const [ allSelected, setAllSelected ] = useState(false)

    const orderTableQuery = useSelector<ReturnType<typeof store.getState>>(state => state.tableQueries.orders) as ITableQuery<Omit<IOrder, 'createdAt'> & {createdAt: string}>

    const dispatch = useDispatch()

    function handleSetTableOrder(orderBy: keyof ViewOrderModel) {
        if(orderBy === orderTableQuery.order.by) {
            dispatch(updateOrderQuery({ order: {by: orderBy, asc: !orderTableQuery.order.asc} }))
        } else dispatch(updateOrderQuery({ order: { by: orderBy, asc: true}}))
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
            Header: <CheckHeaderStyle>
                <Checkbox value={allSelected} onChange={(value) => setAllSelected(value)}/>
            </CheckHeaderStyle>,
            
            Cell: ({row}: {row: Row<ViewOrderModel & {_order: ViewOrderModel}>}) => (
                <div>
                    <Checkbox 
                        value={checkboxes[row.original._order.id ?? 0]} 
                        onChange={() => handleCheckboxChange(row.original._order.id as number)}
                    />
                </div>
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
                    <ActionIcon onClick={() => props.onUpdate(row.original._order)}>
                        <PenIcon size={24}/>
                    </ActionIcon>
                    <ActionIcon onClick={() => props.onDelete(row.original._order)}>
                        <TrashIcon size={24}/>
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
                    isOpened: <StatusCellStyle $opened={order.isOpened}>{order.isOpened ? 'Aberto' : 'Fechado'}</StatusCellStyle>,
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

    return  <>
        { props.orders?.length > 0 && <Table tableInstance={tableInstance}/> }
    </>
}