import { useTheme } from "styled-components";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";
import { BaseIconProps } from "../_helpers/base-icon-props";

export default function EyeIcon(props: BaseIconProps) {
    const theme = useTheme() as StyleThemeConfig;

    let color;

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'text']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_15_200)">
        <circle cx="12" cy="13" r="2" stroke={color} strokeLinejoin="round"/>
        <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_15_200">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
}