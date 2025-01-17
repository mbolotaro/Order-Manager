import styled from "styled-components";
import { IconButtonStyleProps } from "./helpers/icon-button-style-props";

export const IconButtonStyle = styled.div<IconButtonStyleProps>`
  padding: 2px;
  border-radius: 100%;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.$color};
  }
`;