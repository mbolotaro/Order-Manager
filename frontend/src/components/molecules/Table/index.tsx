import Skeleton from "@/components/atoms/Skeleton";
import { TableProps } from "./helpers/table-props";
import { SkeletonContainer, TableCellStyle, TableHeaderColumnStyle, TableStyle } from "./style";
import EmptyMessage from "@/components/atoms/EmptyMessage";

export default function Table<T extends object>(props: TableProps<T>) {
    return props.loading ? <SkeletonContainer>
        <Skeleton height="43px;" width="100%"/>
        <Skeleton height="43px;" width="90%"/>
        <Skeleton height="43px;" width="80%"/>
    </SkeletonContainer> :
    props.tableInstance.data.length === 0 ?
    <EmptyMessage message="Nenhum pedido encontrado!"/> :
    <TableStyle {...props.tableInstance.getTableProps()}>
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