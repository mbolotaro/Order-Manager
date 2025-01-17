import styled from "styled-components";
import { DividerStyleProps } from "./helpers/divider-style-props";
import { baseStyle } from "@/styles/base-style";

export const DividerStyle = styled.hr<DividerStyleProps>`
    background-color: ${props => props.color};
    width: 100%;
    height: ${props => props.size ?? '2px'};
    
    ${baseStyle}
`