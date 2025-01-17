import styled from "styled-components";

export const DefaultLayoutMainStyle = styled.div`
  margin: 40px;
  height: calc(100% - 40px);
  width: calc(100% - 20px);

  display: flex;
  align-items: start;
  justify-content: center;
  padding: 40px;

  @media (max-width: 500px) {
    margin: auto;
    padding: 10px;
    margin-top: 60px;
    width: 100%;
    margin-bottom: 40px;
  }
`;