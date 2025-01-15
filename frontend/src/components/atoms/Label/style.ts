import styled, { css } from "styled-components";
import { ILabelStyleProps } from "./helpers/label-style-props";

export const LabelStyle = styled.label<ILabelStyleProps>`
    color: ${props => props.theme.colors.text};
    ${props => props.disabled ?
        css`color: ${props.theme.colors.grey};` :
        props.error && 
        css`color: ${props => props.theme.colors.danger};`
    }
`

export const OpcionalAlertStyle = styled.span `
    font-style: italic
`