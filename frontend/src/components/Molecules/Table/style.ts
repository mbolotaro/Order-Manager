import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th {
    padding: 10px;
  }

  td {
    border-top: 1px solid ${(props) => props.theme.colors.background};
    padding-top: 10px;
    padding-bottom: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
