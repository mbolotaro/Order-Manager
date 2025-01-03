import Loading from "@/assets/icons/Loading";
import { ButtonProps } from "./helpers/button-props.interface";
import { ButtonStyle } from "./style";

export default function Button(props: ButtonProps) {
    function handleClick() {
        if(!props.loading && !props.disabled && props.onClick) {
            props.onClick()
        }
    }
    return (
        <ButtonStyle 
            model={props.model ?? 'primary'}
            type={props.type ?? 'default'}
            loading={props.loading ?? false}
            disabled={props.disabled ?? false}
            onClick={handleClick}
        >
            {
                props.loading? 
                <Loading size={30} type={props.type ?? 'default'} /> :
                props.text
            }
        </ButtonStyle>
    )
}