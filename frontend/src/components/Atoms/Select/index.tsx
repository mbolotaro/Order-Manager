import Arrow from "@/assets/icons/Arrow";
import { OptionStyle, SelectContainerStyle, SelectIconStyle, SelectStyle } from "./style";
import { ChangeEvent, useState } from "react";
import { ISelectProps, selectPropTypes } from "./helpers/select-props.interface";
import Loading from "@/assets/icons/Loading";

export default function Select<T extends selectPropTypes>(props: ISelectProps<T>) {
    const [opened, setOpened] = useState<boolean>(false)

    function getOptionValue(item: T): T[keyof T] | T {
        if(props.itemValue && typeof item === 'object' && item[props.itemValue]) {
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
                item => props.itemValue && !!item[props.itemValue] && item[props.itemValue] == data)
            
            if(selectedItem) {
                props.onChange(selectedItem[props.itemValue])
            }
        } else props.onChange(
            props.items.find((item) => item && item == data) ?? data
        )

    }

    return <SelectContainerStyle>
        <SelectStyle
            disabled={props.disabled}
            onClick={() => setOpened(!opened)}
            onFocus={() => setOpened(true)}
            onBlur={() => setOpened(false)}
            onChange={(event) => handleChange(event)}
            id={props.id}
            error={props.error ?? false}
        >
            {
                props.items.length > 0 ? 
                
                <>
                    <option disabled selected>{props.customNotSelectedMessage ?? 'Escolha uma opção'}</option>
                    {
                        props.items.map((item, index) => 
                            <OptionStyle key={index} value={String(getOptionValue(item))}>
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
                props.loading && 
                <Loading/>
            }
            <Arrow direction={opened ? 'top' : 'bottom'} size={20} styleType="text"/>
        </SelectIconStyle>
    </SelectContainerStyle>
}