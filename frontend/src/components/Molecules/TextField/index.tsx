import Label from "@/components/Atoms/Label";
import { TextFieldStyle } from "./style";
import Input from "@/components/Atoms/Input";
import InputAlert from "@/components/Atoms/InputAlert";
import { ITextFieldProps } from "./helpers/text-field-props.interface";

export default function TextField(props: ITextFieldProps) {
    return <TextFieldStyle>
        <Label 
            text={props.label} 
            for={props.id} 
            error={!!props.errorMessage}
            disabled={props.disabled}
        />
        <Input 
            id={props.id}
            type="text" 
            onChange={(value) => props.onChange? props.onChange(value) : undefined} 
            value={props.value}
            error={!!props.errorMessage}
            disabled={props.disabled}
            trim
        />
        {props.errorMessage && <InputAlert message="Nome deve ser tal do tal"/>}
    </TextFieldStyle>
}