import { useTheme } from "styled-components";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config";
import { IBaseIconProps } from "../_helpers/base-icon-props";

export default function PenIcon(props: IBaseIconProps) {
    const theme = useTheme() as IStyleThemeConfig
    
    let color;
    
    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'text']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}