import { ILoadingProps } from "./helpers/loading-props.interface";
import { CircleStyle, StopStyle } from "./style";

export default function Loading(props: ILoadingProps) {
    return(
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width={props.size ?? 24}>
        <radialGradient id='a7' cx='.66' fx='.66' cy='.3125' fy='.3125' gradientTransform='scale(1.5)'>
            <StopStyle offset='0' styleType={props.type ?? 'default'}/>
            <StopStyle offset='.3' styleType={props.type ?? 'default'} customColor={props.color} stopOpacity='.9'/>
            <StopStyle offset='.6' styleType={props.type ?? 'default'} customColor={props.color} stopOpacity='.6'/>
            <StopStyle offset='.8' styleType={props.type ?? 'default'} customColor={props.color} stopOpacity='.3'/>
            <StopStyle offset='1' styleType={props.type ?? 'default'} customColor={props.color} stopOpacity='0'/>
        </radialGradient>
        <circle transform-origin='center' fill='none' stroke='url(#a7)' strokeWidth='15' strokeLinecap='round' strokeDasharray='200 1000' strokeDashoffset='0' cx='100' cy='100' r='70'>
            <animateTransform type='rotate' attributeName='transform' calcMode='spline' dur='0.5' values='360;0' keyTimes='0;1' keySplines='0 0 1 1' repeatCount='indefinite'>
            </animateTransform>
        </circle>
        <CircleStyle transform-origin='center' fill='none' opacity='.2' customStrokeColor={props.color} styleType={props.type ?? 'default'} strokeWidth='15' strokeLinecap='round' cx='100' cy='100' r='70'></CircleStyle>
    </svg>
    )
}