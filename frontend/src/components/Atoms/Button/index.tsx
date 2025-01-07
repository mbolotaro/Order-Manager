import Loading from "@/assets/icons/Loading";
import { ButtonProps } from "./helpers/button-props.interface";
import { ButtonStyle } from "./style";
import { useTheme } from "styled-components";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config.interface";

export default function Button(props: ButtonProps) {
    const theme = useTheme() as IStyleThemeConfig
    function handleClick() {
        if(!props.loading && !props.disabled && props.onClick) {
            props.onClick()
        }
    }
    return (
        <ButtonStyle 
            model={props.model ?? 'primary'}
            color={theme.colors[props.type ?? 'primary']}
            loading={props.loading ?? false}
            disabled={props.disabled ?? false}
            onClick={handleClick}
        >
            {
                props.loading? 
                <Loading size={30} styleType={props.type ?? 'primary'} /> :
                props.text
            }
        </ButtonStyle>
    )
}