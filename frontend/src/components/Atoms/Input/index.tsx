import { ChangeEvent, } from "react";
import { InputProps } from "./helpers/input-props.interface";
import { InputContainerStyle, InputIconStyle, InputStyle } from "./style";

export default function Input(props: InputProps) {
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        props.onChange(
            props.trim ?
            event.target?.value.trimStart() :
            event.target?.value
        )
    }

    return (
        <InputContainerStyle>
            <InputStyle
                id={props.id} 
                type={props.type ?? 'text'}
                onChange={!props.register? handleChange : undefined}
                disabled={props.disabled ?? false}
                value={!props.register ? props.value : undefined}
                $error={props.error ?? false}
                {...props.register}
            />
            <InputIconStyle>
                { props.icon }
            </InputIconStyle>
        </InputContainerStyle>
    )
}