import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  box-shadow: 0px 7px 9px -7px rgba(15, 19, 25, 0.75);
  width: 100%;
  background-color :${props => props.theme.colors.card};
  padding-top: 4px;
  padding-bottom: 4px;
  height: 8vh;
`;