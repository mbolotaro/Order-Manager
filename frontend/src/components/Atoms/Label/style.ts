import styled, { css } from "styled-components";
import { ILabelStyleProps } from "./helpers/label-style-props.interface";

export const LabelStyle = styled.label<ILabelStyleProps>`
    ${props => props.disabled ?
        css`color: ${props.theme.colors.grey}` :
        props.error && 
        css`color: ${props => props.theme.colors.danger}` 
    }
`