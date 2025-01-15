import { IInputAlertProps } from "./helpers/input-alert-props";
import { InputAlertStyle } from "./style";

export default function InputAlert(props: IInputAlertProps) {
    return <InputAlertStyle>{props.message}</InputAlertStyle>
}