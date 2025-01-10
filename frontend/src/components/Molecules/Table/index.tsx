import { ITableProps } from "./helpers/table-props.interface";
import { TableStyle } from "./style";

export default function Table<T extends object>(props: ITableProps<T>) {
    return <TableStyle {...props.tableInstance.getTableProps()}>
        <thead>
            {
                props.tableInstance.headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} key={column.id}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...props.tableInstance.getTableBodyProps()}>
        {
        props.tableInstance.rows.map(row => {
            props.tableInstance.prepareRow(row)
            return (
            <tr {...row.getRowProps()} key={row.id}>
                {
                row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()} key={cell.column.id}>
                        {
                            cell.render('Cell')
                        }
                        </td>
                    )
                }
                )}
            </tr>
            )
        })}
        </tbody>
    </TableStyle>
}