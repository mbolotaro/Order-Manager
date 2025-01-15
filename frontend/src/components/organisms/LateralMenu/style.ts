import styled from "styled-components";

export const LateralMenuStyle = styled.nav`
  box-shadow: 7px 0px 9px -10px rgba(15, 19, 25, 0.75);
  height: 100vh;
  position: fixed;
  top: 60px;
  width: 60px;
  max-width: 200px;
  transition: 0.2s;
  background-color: ${(props) => props.theme.colors.card};
  z-index: 1;
  li {
    list-style: none;
  }

  &:hover {
    width: 24vw;
  }
`;