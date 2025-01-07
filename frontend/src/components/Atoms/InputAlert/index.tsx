import { IInputAlertProps } from "./helpers/input-alert-props.interface";
import { InputAlertStyle } from "./style";

export default function InputAlert(props: IInputAlertProps) {
    return <InputAlertStyle>{props.message}</InputAlertStyle>
}