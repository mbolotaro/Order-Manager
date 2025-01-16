import styled, { css } from "styled-components";
import { ButtonStyleProps } from "./helpers/button-style-props";

export const ButtonStyle = styled.button<ButtonStyleProps>`
  min-width: 100px;
  width: ${props => props.$width ?? 'none'};
  padding: ${(props) => (props.$density === "default" ? "6px" : "0px")};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  background-color: transparent;
  color: white;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 700;
  height: 100% !important;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  ${(props) => {
    if (props.$loading) {
      return css<ButtonStyleProps>`
        background-color: transparent;
        border-color: ${(props) => props.$color};
        padding: 0px;
        cursor: default;
      `;
    } else if (props.disabled) {
      return css<ButtonStyleProps>`
        background-color: transparent;
        border-color: ${(props) => props.theme.colors.grey};
        color: ${(props) => props.theme.colors.grey};
        cursor: default;
      `;
    } else
      switch (props.$model) {
        case "primary":
          return css<ButtonStyleProps>`
            background-color: ${(props) => props.$color};

            &:hover {
              background-color: transparent;
              color: ${(props) => props.$color};
              border-color: ${(props) => props.$color};
            }

            &:hover path {
              stroke: ${(props) => props.$color};
            }
          `;
        case "secondary":
          return css<ButtonStyleProps>`
            background-color: transparent;
            border-color: ${(props) => props.$color};
            color: ${(props) => props.$color};
            border-width: 2px;
            border-style: solid;
            

            &:hover {
              background-color: ${(props) => props.$color};
              color: white;
              border-color: ${(props) => props.$color};
            }
          `;
        case "terciary":
          return css<ButtonStyleProps>`
            color: ${(props) => props.$color};

            &:hover {
              color: ${(props) => props.$color};
            }
          `;
      }
  }}
`;