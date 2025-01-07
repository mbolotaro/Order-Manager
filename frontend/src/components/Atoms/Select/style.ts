import styled from "styled-components";

export const SelectStyle = styled.select`
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  border-width: 1px;
  outline: 0;
  appearance: none;
  cursor: pointer;
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