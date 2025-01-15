import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";
import { ArrowProps } from "./helpers/arrow-props";
import { useTheme } from "styled-components";

export default function ArrowIcon(props: ArrowProps) {
    const rotate = getRotate()
    
    const theme = useTheme() as StyleThemeConfig

    let color;

    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    function getRotate() {
        switch(props.direction) {
            case 'top': return 180
            case 'left': return 90
            case 'right': return -90
            default: return 0
        }
    }

    return (
        <svg width={props.size ?? 20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  transform={`rotate(${rotate})`}>
            <path d="M17 9.5L12 14.5L7 9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
    )
}