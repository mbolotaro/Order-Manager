import { ICloseProps } from "./helpers/close-props.interface";
import { useTheme } from "styled-components";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config.interface";

export default function Close(props: ICloseProps) {
    const theme = useTheme() as IStyleThemeConfig

    let color;

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return (

    <svg onClick={props.onClick} width={props.size ?? 40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24"/>
        <path d="M7 17L16.8995 7.10051" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 7.00001L16.8995 16.8995" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
}