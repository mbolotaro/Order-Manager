import { useTheme } from "styled-components";
import { IBaseIconProps } from "../_helpers/base-icon-props";

export default function PlusIcon(props: IBaseIconProps) {
    const theme = useTheme()

    let color;

    if(props.color) {
        color = props.color
    } else {
        color = theme.colors[props.styleType ?? 'text']
    }

    return <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}/>
        <path d="M6 12H18" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}/>
    </svg>
}