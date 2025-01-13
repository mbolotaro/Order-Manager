import styled from "styled-components";
import { IColumnStyleProps } from "./helpers/column-style-props.interface";

export const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th {
    padding-top: 10px;
    padding-bottom: 10px;
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

  td, th {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const TableHeaderColumnStyle = styled.th<IColumnStyleProps>`
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$width};
  min-width: ${(props) => props.$width};
`;

export const TableCellStyle = styled.td<IColumnStyleProps>`
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$width};
  min-width: ${(props) => props.$width};
`;
