import { useTheme } from "styled-components";
import { ICheckmarkProps } from "./helpers/checkmark-props.interface";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config.interface";

export default function Checkmark(props: ICheckmarkProps) {
    const theme = useTheme() as IStyleThemeConfig

    let color;

    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }
    return (
        <svg width={props.size ?? 40} height={props.size ?? 40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}