
import EyeIcon from "@/assets/icons/EyeIcon"
import PenIcon from "@/assets/icons/PenIcon"
import TrashIcon from "@/assets/icons/TrashIcon"
import Checkbox from "@/components/Atoms/Checkbox"
import { IOrder } from "@/models/order.interface"
import { useMemo } from "react"
import { Column, Row, useTable } from "react-table"
import { ActionIcon } from "./style"
import Table from "@/components/Molecules/Table"

export default function OrderTable() {
    const columns = useMemo(() => [
        {
            Header: ' ',
            Cell: ({row}: {row: Row<IOrder>}) => (
                <div><Checkbox value={row.original.checked}/></div>
            )
        },
        {
            Header: 'ID',
            accessor: 'id',
            minWidth: 200, // largura mínima
            maxWidth: 400, // largura máxima
        },
        {
            Header: 'Nome',
            accessor: 'name',
            width: '23px'
        },
        {
            Header: 'Status',
            accessor: 'isOpened',
            width: '200px'
        },
        {
            Header: 'Atendente',
            accessor: 'attendantId',
            width: '200px'
        },
        {
            Header: 'Data de Criação',
            accessor: 'createdAt',
            
        },
        {
            Header: 'Ações',
            Cell: ({row}: {row: Row<IOrder>}) => (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap'}}>
                    <ActionIcon>
                        <EyeIcon size={24}/>
                    </ActionIcon>
                    <ActionIcon>
                        <PenIcon size={24}/>
                    </ActionIcon>
                    <ActionIcon>
                        <TrashIcon size={24}/>
                    </ActionIcon>
                </div>
                
            )
        }
    ] as Column[], [])

    const data = useMemo(() => [
        {
            id: '1',
            name: 'Pedido 01',
            isOpened: false,
            attendantId: 'asdasd',
            createdAt: new Date().toLocaleDateString(),
            checked: false
        },
        {
            id: '2',
            name: 'Pedido 02',
            isOpened: false,
            attendantId: 'asdasd',
            createdAt: new Date().toLocaleDateString(),
            checked: false
        }
    ], [])

    const tableInstance = useTable({ columns, data,    defaultColumn: {
      minWidth: 50, // largura mínima padrão para todas as colunas
      width: 150, // largura padrão para todas as colunas
      maxWidth: 400, // largura máxima padrão para todas as colunas
    }, })


    return <Table tableInstance={tableInstance}/>
}