
import Button from "@/components/Atoms/Button"
import Checkbox from "@/components/Atoms/Checkbox"
import { OrderTableStyle } from "@/components/Templates/OrderCRUD/style"
import { IOrder } from "@/models/order.interface"
import { useMemo } from "react"
import { Column, Row, useTable } from "react-table"

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
            accessor: 'id'
        },
        {
            Header: 'Nome',
            accessor: 'name'
        },
        {
            Header: 'Status',
            accessor: 'isOpened'
        },
        {
            Header: 'Atendente',
            accessor: 'attendantId'
        },
        {
            Header: 'Data de Criação',
            accessor: 'createdAt'
        },
        {
            Header: 'Ações',
            Cell: ({row}: {row: Row<IOrder>}) => (
                <div>
                    <Button text="Editar" onClick={() => console.log(row.original.id)}/>
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

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return <OrderTableStyle {...getTableProps()} >
        <thead>
       {// Loop over the header rows

       headerGroups.map(headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
           {
            headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={column.id}>
                {
                    column.render('Header')}

                </th>
            ))
           }
         </tr>

       ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {
        rows.map(row => {
            prepareRow(row)
            return (
            <tr {...row.getRowProps()} key={row.id}>
                {
                row.cells.map(cell => {
                return (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                    {
                    cell.render('Cell')}
                    </td>
                )
                }
                )}
            </tr>
            )
        })}
        </tbody>
    </OrderTableStyle>
}