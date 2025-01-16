import styled from "styled-components";

export const TableContainerStyle = styled.div`
`

export const ActionRow = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
        flex-direction: column
    }
`

export const CheckColumnStyle = styled.div`
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
  position: relative;
`

export const OnLeftHeaderStyle = styled.div`
  text-align: left !important;
  white-space: nowrap;
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
  transition: 0.2s;

`

export const IDCellStyle = styled.div`
    color: ${props => props.theme.colors.primary};
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OnLeftCellStyle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  display: block;
`;

export const EmptyInfoCellStyle = styled.div`
    color: ${props => props.theme.colors.grey};
`