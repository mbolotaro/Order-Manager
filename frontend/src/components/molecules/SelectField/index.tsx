import Select from "@/components/atoms/Select";
import { SelectFieldProps } from "./helpers/select-field-props";
import { SelectPropTypes } from "@/components/atoms/Select/helpers/select-props";
import Label from "@/components/atoms/Label";
import InputAlert from "@/components/atoms/InputAlert";

export default function SelectField<T extends SelectPropTypes>(props: SelectFieldProps<T>) {
    return <div>
        <Label for={props.id} text={props.label} disabled={props.disabled} error={!!props.errorMessage} isOptional={props.isOptional}/>
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
            onClear={props.onClear}
            value={props.value}
            error={!!props.errorMessage}
            clearable={props.clearable}
            register={props.register}
        />
        { props.errorMessage && <InputAlert message={props.errorMessage}/>}
    </div>
}