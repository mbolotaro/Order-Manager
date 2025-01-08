import styled from "styled-components";

export const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  left: 60px;
  height: 6vh;
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: 0px -7px 9px -7px rgba(15, 19, 25, 0.75);
  z-index: 0;

  span {
    padding-left: 8px;
    color: ${props => props.theme.colors.text};
  }
`;