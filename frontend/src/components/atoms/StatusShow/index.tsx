import { StatusCellProps } from "./helpers/status-cell-props";
import { StatusCellStyle } from "./style";

export default function StatusShow(props: StatusCellProps) {
    return <StatusCellStyle $opened={props.opened}>{props.opened ? 'Aberto' : 'Fechado'}</StatusCellStyle>
}