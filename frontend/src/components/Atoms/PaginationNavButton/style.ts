import styled, { css } from "styled-components";
import { IPaginationNavButtonStyleProps } from "./helpers/pagination-nav-button-style-props.interface";

export const PaginationNavButtonStyle = styled.button<IPaginationNavButtonStyleProps>`
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.colors.text};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  ${(props) =>
    props.$type === "previous"
      ? css`
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          border-right-color: transparent;
        `
      : props.$type === "next"
      ? css`
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;

        `
      : css`
        border-right-color: transparent;
      `}
`;