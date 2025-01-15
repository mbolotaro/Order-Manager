import styled, { css } from "styled-components";
import { ISelectStyleProps } from "./helpers/select-style-props";

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
    props.$error &&
    css`
      border-color: ${(props) => props.theme.colors?.danger};
    `};
`;

export const OptionStyle = styled.option`
  background-color: ${props => props.theme.colors.background};
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

export const ClearIconStyle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s;
  opacity: 0;
  
`

export const SelectContainerStyle = styled.div`
  position: relative;
  width: 100%;

  &:hover .clearable-icon {
    opacity: 100 !important;
  }
`;