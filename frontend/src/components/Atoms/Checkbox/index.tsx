import { ChangeEvent } from "react";
import { ICheckboxProps } from "./helpers/checkbox-props.interface";

export default function Checkbox(props: ICheckboxProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        console.log(value)
        if(props.onChange) {
            props.onChange(value === 'true')
        }
    }
    return <>
     <input type="checkbox" value={String(props.value)} onChange={(event) => handleChange(event)}/>
     <div/>
    </>
}