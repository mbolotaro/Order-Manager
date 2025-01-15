import styled from "styled-components";
import Select from "@/components/atoms/Select";

export const TablePaginationStyleContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const QuantByPageLabel = styled.label`
  color: ${(props) => props.theme.colors.grey} !important;
  font-size: ${props => props.theme.fontSizes.small};
  text-wrap: nowrap;
`;

export const QuantByPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 180px;
`

export const OrderQuantCounter = styled.span`
  padding-left: 6px;
  color: ${props => props.theme.colors.grey} !important;
  font-size: ${props => props.theme.fontSizes.small};
`

export const SelectStyle = styled(Select)`

`

export const PaginationNavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: right;
`