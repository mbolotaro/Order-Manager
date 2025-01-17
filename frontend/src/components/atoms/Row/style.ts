import styled, { css } from "styled-components";
import { RowStyleProps } from "./helpers/row-style-props";
import { baseStyle } from "@/styles/base-style";

export const RowStyle = styled.div<RowStyleProps>`
    display: flex;
    align-items: center;
    gap: ${props => props.$gap};
    justify-content: ${props => props.$justify};
    flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
    ${props => props.$wrapAt ? css`
        @media (max-width: ${props.$wrapAt}) {
            justify-content: ${props.$justifyWrapped};
        }
    ` : null}
    ${baseStyle}

`