import { useTheme } from "styled-components";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";
import { BaseIconProps } from "../helpers/base-icon-props";

export default function MenuIcon(props: BaseIconProps) {
    const theme = useTheme() as StyleThemeConfig

    let color;

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 15.5H18" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 8.5H18" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}