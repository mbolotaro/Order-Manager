import styled, { css } from "styled-components";
import { LabelStyleProps } from "./helpers/label-style-props";

export const LabelStyle = styled.label<LabelStyleProps>`
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