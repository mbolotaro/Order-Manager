import { ITableProps } from "./helpers/table-props.interface";
import { TableCellStyle, TableHeaderColumnStyle, TableStyle } from "./style";

export default function Table<T extends object>(props: ITableProps<T>) {
    return <TableStyle {...props.tableInstance.getTableProps()}>
        <thead>
            {
                props.tableInstance.headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {
                            headerGroup.headers.map(column => (
                                <TableHeaderColumnStyle width={column.width} minWidth={column.minWidth} maxWidth={column.maxWidth} {...column.getHeaderProps()} key={column.id}>
                                    {
                                        column.render('Header')
                                    }
                                </TableHeaderColumnStyle>
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
                        <TableCellStyle width={cell.column.width} maxWidth={cell.column.maxWidth} minWidth={cell.column.minWidth} {...cell.getCellProps()} key={cell.column.id}>
                        {
                            cell.render('Cell')
                        }
                        </TableCellStyle>
                    )
                }
                )}
            </tr>
            )
        })}
        </tbody>
    </TableStyle>
}