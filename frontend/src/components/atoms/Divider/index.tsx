import { DividerProps } from "./helpers/divider-props";
import { DividerStyle } from "./style";
import { useTheme } from "styled-components";
import { StyleThemeConfig } from "@/styles/helpers/style-theme-config";

export default function Divider(props: DividerProps) {
    const theme = useTheme() as StyleThemeConfig
    let color; 

    if(props.color) {
        color = props.color;
    } else {
        color = theme.colors[props.styleType ?? 'primary']
    }

    return <DividerStyle 
        color={color} 
        size={props.size}
        $margin={props.$margin}
        $padding={props.$padding}
    />
}