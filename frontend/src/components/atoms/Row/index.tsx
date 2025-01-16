import { RowProps } from "./helpers/row-props";
import { RowStyle } from "./style";

export default function Row(props: RowProps) {
    return <RowStyle 
        $gap={props.$gap ?? '0px'} 
        $justify={props.$justify ?? 'start'}
        $margin={props.$margin}
        $padding={props.$padding}
        $width={props.$width}
        $minWidth={props.$minWidth}
        $wrap={props.$wrap}
    >
        {props.children}
    </RowStyle>
}