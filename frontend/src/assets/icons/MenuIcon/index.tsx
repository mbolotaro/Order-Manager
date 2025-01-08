import { useTheme } from "styled-components";
import { IMenuIconProps } from "./helpers/menu-props.interface";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config.interface";

export default function MenuIcon (props: IMenuIconProps) {
    const theme = useTheme() as IStyleThemeConfig

    let color;

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 15.5H18" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 8.5H18" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}