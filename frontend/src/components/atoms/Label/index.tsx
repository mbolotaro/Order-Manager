import { LabelProps } from "./helpers/label-props";
import { LabelStyle, OpcionalAlertStyle } from "./style";

export default function Label(props: LabelProps) {
    return <LabelStyle htmlFor={props.for} disabled={props.disabled ?? false} error={props.error ?? false}>
        {props.text}
        {props.isOptional && <OpcionalAlertStyle> - Opcional</OpcionalAlertStyle>}
    </LabelStyle>
}