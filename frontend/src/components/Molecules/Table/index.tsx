import { ITableProps } from "./helpers/table-props.interface";
import { TableCellStyle, TableHeaderColumnStyle, TableStyle } from "./style";

export default function Table<T extends object>(props: ITableProps<T>) {
    return <TableStyle {...props.tableInstance.getTableProps()}>
        <thead>
            {
                props.tableInstance.headerGroups.map((headerGroup, index) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                        {
                            headerGroup.headers.map((column, index) => (
                                <TableHeaderColumnStyle 
                                    $width={column.width} 
                                    $minWidth={column.minWidth} 
                                    $maxWidth={column.maxWidth} 
                                    {...column.getHeaderProps()} 
                                    key={index}
                                >
                                    {
                                        column.render('Header')
                                        
                                    }
                                    <div></div>
                                </TableHeaderColumnStyle>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...props.tableInstance.getTableBodyProps()}>
        {
        props.tableInstance.rows.map((row, index) => {
            props.tableInstance.prepareRow(row)
            return (
            <tr {...row.getRowProps()} key={index}>
                {
                row.cells.map((cell, index) => {
                    return (
                        <TableCellStyle 
                            $width={cell.column.width} 
                            $maxWidth={cell.column.maxWidth} 
                            $minWidth={cell.column.minWidth} 
                            {...cell.getCellProps()} 
                            key={index}>
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