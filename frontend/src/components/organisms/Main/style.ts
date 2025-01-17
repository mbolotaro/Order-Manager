import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: 0px 0px 9px -4px rgba(15, 19, 25, 0.75);
  padding: 18px;
  margin-bottom: 60px;

  @media (max-width: 500px) {
    padding: 10px;
  }
`;