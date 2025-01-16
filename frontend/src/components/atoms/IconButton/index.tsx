import { useTheme } from "styled-components";
import { IconButtonProps } from "./helpers/icon-button-props";
import { IconButtonStyle } from "./style";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function IconButton(props: IconButtonProps) {
    const theme = useTheme() as StyleThemeConfig
    let color;

    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    function handleClick() {
        if(!props.disabled && props.onClick) {
            props.onClick()
        } else if(props.onDenyClick) {
            props.onDenyClick()
        }
    }

    return <IconButtonStyle onClick={handleClick} $color={!props.disabled ? color : 'none'}>
        { props.children }
    </IconButtonStyle>
}