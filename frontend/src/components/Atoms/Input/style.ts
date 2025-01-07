import styled, { css } from "styled-components";
import { IInputStyleProps } from "./helpers/input-style-props.interface";

export const InputStyle =
  styled.input<IInputStyleProps>`
    background: transparent;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.text};
    padding: 6px;
    color: ${props => props.theme.colors.text};
    outline: 0;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.normal};
    transition: border-color 0.5s;
    &:focus {
        border-color: ${(props) => props.theme.colors.primary};
    }

    ${(props) =>
      props.disabled &&
      css`
        opacity: 30%;
        background-color: ${(props) =>
          props.theme.colors?.grey};
      `}

    ${(props) =>
      props.error &&
      css`
        border-color: ${(props) =>
          props.theme.colors?.danger};
      `}
`;

export const InputContainerStyle =styled.div`
  position: relative;
`

export const InputIconStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100%;
  height: 100%;
  transform: translateY(-100%);
  right: 6px;
`