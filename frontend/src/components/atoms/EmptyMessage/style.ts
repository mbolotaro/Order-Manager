import { baseStyle } from "@/styles/base-style";
import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import styled from "styled-components";

export const EmptyMessageStyle = styled.div<BaseStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 120px;
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSizes.large};
    font-style: italic;

    ${baseStyle}
    
`