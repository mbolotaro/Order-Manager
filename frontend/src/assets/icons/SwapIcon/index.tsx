import { useTheme } from "styled-components";
import { IBaseIconProps } from "../_helpers/base-icon-props.interface";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config.interface";

export default function SwapIcon(props: IBaseIconProps) {
    const theme = useTheme() as IStyleThemeConfig
    
    let color;
    
    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'text']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="swapVerticalIconTitle" stroke={color} stroke-width="1" stroke-linecap="square" strokeLinejoin="miter" fill="none" color={color}> 
        <title id="swapVerticalIconTitle">Swap items (vertically)</title> 
        <desc id="swapVerticalIconDesc"/> 
        <path d="M4 8L7 5L10 8"/> 
        <path d="M7 20L7 6"/> 
        <path d="M20 17L17 20L14 17"/> 
        <path d="M17 5L17 19"/> 
    </svg>
}