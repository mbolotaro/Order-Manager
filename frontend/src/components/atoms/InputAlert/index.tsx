import { InputAlertProps } from "./helpers/input-alert-props";
import { InputAlertStyle } from "./style";

export default function InputAlert(props: InputAlertProps) {
    return <InputAlertStyle>{props.message}</InputAlertStyle>
}