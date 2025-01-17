import styled from "styled-components";
import { ColumnStyleProps } from "./helpers/column-style-props";

export const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  table-layout: fixed;

  th {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${(props) => props.theme.colors.card};
  }

  td {
    border-top: 1px solid
      ${(props) =>
        props.theme.name === "dark"
          ? props.theme.colors.background
          : props.theme.colors.secondary};
    padding-top: 10px;
    padding-bottom: 10px;
  }

  td,
  th {
    padding-left: 4px;
    padding-right: 4px;
    user-select: none;
  }

  thead {

  }
`;

export const TableHeaderColumnStyle = styled.th<ColumnStyleProps>`
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  min-width: ${(props) => props.$minWidth};
`;

export const TableCellStyle = styled.td<ColumnStyleProps>`
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  min-width: ${(props) => props.$minWidth};
`;

export const SkeletonContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column
`