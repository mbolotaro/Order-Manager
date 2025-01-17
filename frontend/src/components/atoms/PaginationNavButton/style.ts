import styled, { css } from "styled-components";
import { PaginationNavButtonStyleProps } from "./helpers/pagination-nav-button-style-props";

export const PaginationNavButtonStyle = styled.button<PaginationNavButtonStyleProps>`
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
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
      `
  }

  ${(props) => 
    props.$current &&
      css`
        background-color: ${props.theme.colors.primary};
        color: ${props => props.theme.colors.light}
      `
  }
`;