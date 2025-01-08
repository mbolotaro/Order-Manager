import styled, { css } from "styled-components";

export const SelectStyle = styled.select`
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  border-width: 1px;
  outline: 0;
  appearance: none;
  border-color: ${props => props.theme.colors.text};
  background-color: transparent;
  cursor: pointer;

  ${props => props.disabled && css`
    border-color: ${props => props.theme.colors.grey}
  `}
`;

export const OptionStyle = styled.option`
  outline: 0;
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