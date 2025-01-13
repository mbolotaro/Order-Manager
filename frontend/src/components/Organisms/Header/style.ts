import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0px 7px 9px -10px rgba(15, 19, 25, 0.75);
  width: 100%;
  background-color :${props => props.theme.colors.card};
  padding-top: 4px;
  padding-bottom: 4px;
  height: 60px;
  min-height: 50px;
  z-index: 2;
  padding-right: 24px;
`;
