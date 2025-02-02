import Label from "@/components/atoms/Label";
import { TextFieldStyle } from "./style";
import Input from "@/components/atoms/Input";
import InputAlert from "@/components/atoms/InputAlert";
import { TextFieldProps } from "./helpers/text-field-props";

export default function TextField(props: TextFieldProps) {
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
            register={props.register}
        />
        {props.errorMessage && <InputAlert message={props.errorMessage}/>}
    </TextFieldStyle>
}