import styled from "styled-components";

export const HomeButtonStyle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
  }
`;