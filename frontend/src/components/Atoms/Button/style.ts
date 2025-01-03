import styled, { css } from "styled-components";
import { ButtonStyleType } from "./helpers/button-props.interface";
import { IButtonStyleProps } from "./helpers/button-style-props.interface";

export function getColor(type: ButtonStyleType) {
  switch(type) {
    case 'danger': return 'danger';
    default: return 'primary';
  }
}

export const ButtonStyle = styled.button<IButtonStyleProps>`
  min-width: 100px;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  background-color: transparent;
  color: white;
  letter-spacing: 1px;
  text-align: center;
  flex: 1;
  font-weight: 700;
  height: 100% !important;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;

  ${(props) => {
    if(props.loading) {
      return css<IButtonStyleProps>`
        background-color: transparent;
        border-color: ${(props) => props.theme.colors[getColor(props.type)]};
        padding: 0px;
        cursor: default;
      `;
    } else if(props.disabled) {
      return css<IButtonStyleProps>`
        background-color: transparent;
        border-color: ${props => props.theme.colors.grey};
        color: ${props => props.theme.colors.grey};
        cursor: default;
      `;
    }
    else switch (props.model) {
      case "primary":
        return css<IButtonStyleProps>`
          background-color: ${(props) =>
            props.theme.colors[getColor(props.type)]};

          &:hover {
            background-color: transparent;
            color: ${(props) => props.theme.colors[getColor(props.type)]};
            border-color: ${(props) =>
              props.theme.colors[getColor(props.type)]};
          }
        `;
      case "secondary":
        return css<IButtonStyleProps>`
          background-color: transparent;
          border-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors[getColor(props.type)]};
          border-width: 2px;
          border-style: solid;

          &:hover {
            background-color: ${props => props.theme.colors.primary};
            color: white;
            border-color: ${(props) =>
              props.theme.colors[getColor(props.type)]};
          }
        `;
      case "terciary":
        return css<IButtonStyleProps>`
          color: ${(props) => props.theme.colors[getColor(props.type)]};

          &:hover {
            color: ${props => props.theme.colors.text}
          }
        `;
    }
  }}
`;