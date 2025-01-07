import styled from "styled-components";
import { IDividerStyleProps } from "./helpers/divider-style-props.interface";

export const DividerStyle = styled.div<IDividerStyleProps>`
    background-color: ${props => props.color};
    width: 100%;
    height: 2px;
`