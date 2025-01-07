import Label from "@/components/Atoms/Label";
import { TextFieldStyle } from "./style";
import Input from "@/components/Atoms/Input";
import InputAlert from "@/components/Atoms/InputAlert";
import { ITextFieldProps } from "./helpers/text-field-props.interface";
import { useState } from "react";

export default function TextField(props: ITextFieldProps) {
    const [value, setValue] = useState<string | undefined>(undefined)
    return <TextFieldStyle>
        <Label 
            text={props.label} 
            for={props.id} 
            error={!!props.errorMessage}
        />
        <Input 
            id={props.id}
            type="text" 
            onChange={(value) => setValue(value)} 
            value={value} 
            error={!!props.errorMessage}
            disabled={props.disabled}
        />
        {props.errorMessage && <InputAlert message="Nome deve ser tal do tal"/>}
    </TextFieldStyle>
}