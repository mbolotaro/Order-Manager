import styled from "styled-components";

export const CRUDTemplateView = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: 0px 0px 9px -4px rgba(15, 19, 25, 0.75);
  padding: 10px;
`;

export const TableToolsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
`

export const ButtonContainerStyle = styled.div`
  &:hover path {
    stroke: ${props => props.theme.colors.primary}
  }
`

export const OrderTableStyle = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th {
    padding: 10px;
  }

  td {
    border-top: 1px solid ${(props) => props.theme.colors.background};
    padding: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;