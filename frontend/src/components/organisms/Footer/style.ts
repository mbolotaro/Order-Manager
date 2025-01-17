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
  box-shadow: 0px -7px 9px -10px rgba(15, 19, 25, 0.75);
  z-index: 0;

  span {
    text-align: center;
    width: 100%;
    color: ${props => props.theme.name === 'dark' ? props.theme.colors.grey : props.theme.colors.text};
  }

  @media (max-width: 500px) {
    left: 0;
    position: absolute;
  }
`;