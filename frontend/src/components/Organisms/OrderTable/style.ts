import styled from "styled-components";
import { IStatusCellStyleProps } from "./helpers/status-cell-props.interface";

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

export const NameHeaderStyle = styled.div`
  text-align: left !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: left !important;
`;

export const IDCellStyle = styled.div`
    color: ${props => props.theme.colors.primary};
    font-weight: 800;
    display: flex;
`

export const NameCellStyle = styled.div`
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 6px;

    &::before {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${props => props.$opened ? props.theme.colors.opened : props.theme.colors.danger};
        border-radius: 100%;
        margin-top: 4px;
    }
`