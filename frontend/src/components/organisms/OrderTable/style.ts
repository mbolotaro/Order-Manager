import styled from "styled-components";

export const TableContainerStyle = styled.div`
`

export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;

    @media (max-width: 1300px) {
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
  width: 100px;
  display: block;

  @media (min-width: 900px) {
    width: 200px;
  }

  @media (min-width: 1000px) {
    width: 300px
  }
`;

export const EmptyInfoCellStyle = styled.div`
    color: ${props => props.theme.colors.grey};
`