import styled, { css } from "styled-components";
import { ISelectStyleProps } from "./helpers/select-style-props.interface";

export const SelectStyle = styled.select<ISelectStyleProps>`
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  border-width: 1px;
  outline: 0;
  appearance: none;
  border-color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text} !important;
  cursor: pointer;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${(props) => props.theme.colors.grey};
    `}

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.colors?.danger};
    `}
`;

export const OptionStyle = styled.option`
  outline: 0;
  color: ${props => props.theme.colors.text} !important;
`

export const SelectIconStyle = styled.div`
  position: absolute;
  top: 100%;
  right: 6px;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const SelectContainerStyle = styled.div`
  position: relative;
  width: 100%;
`;