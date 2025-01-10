
import EyeIcon from "@/assets/icons/EyeIcon"
import PenIcon from "@/assets/icons/PenIcon"
import TrashIcon from "@/assets/icons/TrashIcon"
import Checkbox from "@/components/Atoms/Checkbox"
import { IOrder } from "@/models/order.interface"
import { useMemo } from "react"
import { Column, Row, useTable } from "react-table"
import { ActionIcon } from "./style"
import Table from "@/components/Molecules/Table"
import { TableListItem } from "@/components/Molecules/Table/helpers/table-list"
import { statusValues } from "@/models/status.values"
import { HoverDetails } from "@/components/Molecules/HoverDetails"

export default function OrderTable() {

    const columns = useMemo(() => [
        {
            Header: ' ',
            Cell: ({row}: {row: Row<TableListItem<IOrder>>}) => (
                <div><Checkbox value={row.original.selected}/></div>
            ),
            width: 20
        },
        {
            Header: 'ID',
            accessor: 'id',
            width: 20,
        },
        {
            Header: 'Nome',
            accessor: 'name',
            width: 200
        },
        {
            Header: 'Status',
            accessor: 'isOpened',
            width: 200
        },
        {
            Header: 'Atendente',
            accessor: 'attendantId',
            width: 200
        },
        {
            Header: 'Data de Criação',
            accessor: 'createdAt',
            width: 200
            
        },
        {
            Header: 'Ações',
            width: 100,
            Cell: ({row}: {row: Row<IOrder>}) => (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap'}}>
                    <HoverDetails details="opa">
                        <ActionIcon>
                            <EyeIcon size={24}/>
                        </ActionIcon>
                    </HoverDetails>
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
            isOpened: statusValues[0].name,
            attendantId: 'asdasd',
            createdAt: new Date().toLocaleDateString(),
            checked: false
        },
        {
            id: '2',
            name: 'Pedido 02',
            isOpened: statusValues[1].name,
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