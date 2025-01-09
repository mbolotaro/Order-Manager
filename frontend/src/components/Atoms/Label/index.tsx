import { ILabelProps } from "./helpers/label-props.interface";
import { LabelStyle, OpcionalAlertStyle } from "./style";

export default function Label(props: ILabelProps) {
    return <LabelStyle htmlFor={props.for} disabled={props.disabled ?? false} error={props.error ?? false}>
        {props.text}
        {props.isOpcional && <OpcionalAlertStyle> - Opcional</OpcionalAlertStyle>}
    </LabelStyle>
}