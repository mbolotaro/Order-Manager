import { IDividerProps } from "./helpers/divider-props";
import { DividerStyle } from "./style";
import { useTheme } from "styled-components";
import { IStyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function Divider(props: IDividerProps) {
    const theme = useTheme() as IStyleThemeConfig
    let color; 

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return <DividerStyle color={color} size={props.size}/>
}