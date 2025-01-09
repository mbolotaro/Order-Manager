import Arrow from "@/assets/icons/Arrow";
import { ClearIconStyle, OptionStyle, SelectContainerStyle, SelectIconStyle, SelectStyle } from "./style";
import { ChangeEvent, useState } from "react";
import { ISelectProps, selectPropTypes } from "./helpers/select-props.interface";
import Loading from "@/assets/icons/Loading";
import Close from "@/assets/icons/Close";

export default function Select<T extends selectPropTypes>(props: ISelectProps<T>) {
    const [opened, setOpened] = useState<boolean>(false)

    function getOptionValue(item: T): T[keyof T] | T {

        if(props.itemValue && typeof item === 'object' && item[props.itemValue] !== null) {
            return item[props.itemValue]
        } else return item
    }

    function getOptionTitle(item: T) {
        if(props.itemTitle && typeof item === 'object' && item[props.itemTitle]) {
            return String(item[props.itemTitle])
        } else return String(item)
    }

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const data = event.target.value as T[keyof T] | T
        if(!props.onChange) return 
        
        if(props.itemValue) {
            const selectedItem = props.items.find(
                item => props.itemValue && item[props.itemValue] == data)
            
            if(selectedItem) {
                props.onChange(selectedItem[props.itemValue])
            }
        } else props.onChange(
            props.items.find((item) => item && item == data) ?? data
        )

    }

    return <SelectContainerStyle>
        <SelectStyle
            value={typeof props.value !== 'object'? props.value?.toString() : props.itemValue && props.value ? (props.value as T)[props.itemValue] as string : undefined}
            disabled={props.disabled}
            onClick={() => setOpened(!opened)}
            onFocus={() => setOpened(true)}
            onBlur={() => setOpened(false)}
            onChange={(event) => handleChange(event)}
            id={props.id}
            error={props.error ?? false}
            {...props.register}
        >
            {
                props.items.length > 0 ? 
                
                <>
                    <OptionStyle disabled selected>{props.customNotSelectedMessage ?? 'Escolha uma opção'}</OptionStyle>
                    {
                        props.items.map((item, index) => 
                            <OptionStyle key={index} value={String(getOptionValue(item))}>
                                <Arrow size={40} direction="bottom"></Arrow>
                                {getOptionTitle(item)}
                            </OptionStyle>
                        )
                    }
                </>
                 :
                <OptionStyle>{props.customEmptyMessage ?? "Não há itens disponíveis!"}</OptionStyle>
            }
        </SelectStyle>
        <SelectIconStyle>
            {
                props.clearable? 
                <ClearIconStyle className="clearable-icon" onClick={() => props.onChange ? props.onChange(undefined) : undefined}>
                    <Close size={40} styleType="background"/>
                </ClearIconStyle> :
                props.loading && 
                <Loading/>
            }
            <Arrow direction={opened ? 'top' : 'bottom'} size={20} styleType="text"/>
        </SelectIconStyle>
    </SelectContainerStyle>
}