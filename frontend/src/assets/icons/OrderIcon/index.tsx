import { useTheme } from "styled-components";
import { OrderProps } from "./helpers/order-icon.props";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function OrderIcon(props: OrderProps) {
    const theme = useTheme() as StyleThemeConfig
    
    let color;
    
    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'text']
    }
    
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_15_17)">
            
            <path strokeWidth={1.5} d="M3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5H12H20C20.5523 5.5 21 5.94772 21 6.5V17.5C21 18.0523 20.5523 18.5 20 18.5H4C3.44772 18.5 3 18.0523 3 17.5Z" stroke={color} strokeLinejoin="round"/>
            <path strokeWidth={1.5} d="M3 6L12 12L21 6" stroke={color} strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_15_17">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}