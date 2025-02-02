import { CloseProps } from "./helpers/close-props";
import { useTheme } from "styled-components";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function CloseIcon(props: CloseProps) {
    const theme = useTheme() as StyleThemeConfig

    let color;

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return (

    <svg onClick={props.onClick} width={props.size ?? 40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24"/>
        <path d="M7 17L16.8995 7.10051" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7.00001L16.8995 16.8995" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}