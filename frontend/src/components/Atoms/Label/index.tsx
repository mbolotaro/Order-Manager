import { ILabelProps } from "./helpers/label-props.interface";
import { LabelStyle } from "./style";

export default function Label(props: ILabelProps) {
    return <LabelStyle htmlFor={props.for} disabled={props.disabled ?? false} error={props.error ?? false}>
        {props.text}
    </LabelStyle>
}