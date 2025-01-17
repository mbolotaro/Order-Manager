import styled, { css } from "styled-components";
import { InputContainerStyleProps, InputStyleProps } from "./helpers/input-style-props";

export const InputStyle = styled.input<InputStyleProps>`
  background: transparent;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  padding: 6px;
  color: ${(props) => props.theme.colors.text};
  outline: 0;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.normal};
  transition: border-color 0.2s;
  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 30%;
      border-color: ${(props) => props.theme.colors?.grey};
    `}

  ${(props) =>
    props.$error &&
    css`
      border-color: ${(props) => props.theme.colors?.danger};
    `}
`;

export const InputContainerStyle = styled.div<InputContainerStyleProps>`
  position: relative;
  width: ${(props) => props.$width ?? "100%"};
`;

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