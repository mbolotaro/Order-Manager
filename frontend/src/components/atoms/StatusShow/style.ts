import { StatusCellStyleProps } from "@/components/atoms/StatusShow/helpers/status-cell-style-props";
import styled from "styled-components";

export const StatusCellStyle = styled.div<StatusCellStyleProps>`
  text-align: left !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: left !important;
  gap: 6px;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: ${(props) =>
      props.$opened ? props.theme.colors.opened : props.theme.colors.danger};
    border-radius: 100%;
    margin-top: 4px;
  }
`;
