import { ChangeEvent, } from "react";
import { InputProps } from "./helpers/input-props.interface";
import { InputContainerStyle, InputIconStyle, InputStyle } from "./style";

export default function Input(props: InputProps) {
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        props.onChange(
            props.trim ?
            event.target?.value.trim() :
            event.target?.value
        )
    }

    return (
        <InputContainerStyle>
            <InputStyle
                id={props.id} 
                type={props.type ?? 'text'}
                onChange={handleChange}
                disabled={props.disabled ?? false}
                error={props.error ?? false}
                value={props.value}
            />
            <InputIconStyle>
                { props.icon }
            </InputIconStyle>
        </InputContainerStyle>
    )
}