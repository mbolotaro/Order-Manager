import styled from "styled-components";
import { IStatusCellStyleProps } from "./helpers/status-cell-props.interface";

export const TableContainerStyle = styled.div`
  overflow-y: scroll;
  height: 64%;
`

export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        flex-direction: column
    }
`

export const ActionIcon = styled.div`
    padding: 2px;
    border-radius: 100%;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.primary}
    }
`
export const CheckHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const HeaderStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  &:hover div {
    opacity: 100
  }
`

export const OnLeftHeaderStyle = styled.div`
  text-align: left !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: left !important;
  gap: 6px;

  &:hover div {
    opacity: 100;
  }

  cursor: pointer;
`;

export const SwapIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`

export const IDCellStyle = styled.div`
    color: ${props => props.theme.colors.primary};
    font-weight: 800;
    display: flex;
`

export const OnLeftCellStyle = styled.div`
    text-align: left !important;
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: left !important;
`

export const EmptyInfoCellStyle = styled.div`
    color: ${props => props.theme.colors.grey};
`

export const StatusCellStyle = styled.div<IStatusCellStyleProps>`
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