import styled from "styled-components";
import { IDividerStyleProps } from "./helpers/divider-style-props.interface";

export const DividerStyle = styled.hr<IDividerStyleProps>`
    background-color: ${props => props.color};
    width: 100%;
    height: ${props => props.size ?? '2px'};
    margin: 8px;
`