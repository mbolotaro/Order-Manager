import { LoadingProps } from "./helpers/loading-props";
import { useTheme } from "styled-components";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function LoadingIcon(props: LoadingProps) {
    const theme = useTheme() as StyleThemeConfig
    let color;

    if(props.color) {
        color = props.color
    } else {
    }   color = theme.colors[props.styleType ?? 'primary']

    
    return(
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width={props.size ?? 24}>
        <radialGradient id='a7' cx='.66' fx='.66' cy='.3125' fy='.3125' gradientTransform='scale(1.5)'>
            <stop offset='0' stopColor={color}/>
            <stop offset='.3' stopColor={color} stopOpacity='.9'/>
            <stop offset='.6' stopColor={color} stopOpacity='.6'/>
            <stop offset='.8' stopColor={color} stopOpacity='.3'/>
            <stop offset='1' stopColor={color} stopOpacity='0'/>
        </radialGradient>
        <circle transform-origin='center' fill='none' stroke='url(#a7)' strokeWidth='15' strokeLinecap='round' strokeDasharray='200 1000' strokeDashoffset='0' cx='100' cy='100' r='70'>
            <animateTransform type='rotate' attributeName='transform' calcMode='spline' dur='0.5' values='360;0' keyTimes='0;1' keySplines='0 0 1 1' repeatCount='indefinite'>
            </animateTransform>
        </circle>
        <circle transform-origin='center' fill='none' opacity='.2' stroke={color} strokeWidth='15' strokeLinecap='round' cx='100' cy='100' r='70'></circle>
    </svg>
    )
}