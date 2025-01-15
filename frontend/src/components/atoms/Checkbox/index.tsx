import { ChangeEvent } from "react";
import { ICheckboxProps } from "./helpers/checkbox-props.interface";
import { CustomCheckbox, CustomCheckedMarkation, RealCheckbox } from "./style";
import CheckmarkIcon from "@/assets/icons/CheckmarkIcon";

export default function Checkbox(props: ICheckboxProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.checked
        if(props.onChange) {
            props.onChange(value)
        }
    }
    return <>
        <RealCheckbox type="checkbox" checked={props.value} onChange={(event) => handleChange(event)}/>
        <CustomCheckbox onClick={() => props.onChange ? props.onChange(!props.value) : undefined}>
            {
                props.value && 
                <CustomCheckedMarkation>
                    <CheckmarkIcon size={40} styleType="light"/>
                </CustomCheckedMarkation>
            }
        </CustomCheckbox>
    </>
}