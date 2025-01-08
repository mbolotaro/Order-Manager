import Select from "@/components/Atoms/Select";
import { ISelectFieldProps } from "./helpers/select-field-props.interface";
import { selectPropTypes } from "@/components/Atoms/Select/helpers/select-props.interface";
import Label from "@/components/Atoms/Label";
import InputAlert from "@/components/Atoms/InputAlert";

export default function SelectField<T extends selectPropTypes>(props: ISelectFieldProps<T>) {
    return <div>
        <Label for={props.id} text={props.label} disabled={props.disabled} error={!!props.errorMessage}/>
        <Select<T>
            items={props.items} 
            id={props.id} 
            customEmptyMessage={props.customEmptyMessage}
            customNotSelectedMessage={props.customNotSelectedMessage}
            itemTitle={props.itemTitle}
            itemValue={props.itemValue}
            loading={props.loading}
            disabled={props.disabled}
            onChange={(value) => props.onChange? props.onChange(value): undefined}
            value={props.value}
            error={!!props.errorMessage}
        />
        { props.errorMessage && <InputAlert message={props.errorMessage}/>}
    </div>
}