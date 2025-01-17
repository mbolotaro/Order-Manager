import styled from "styled-components";
import Select from "@/components/atoms/Select";


export const QuantByPageLabel = styled.label`
  color: ${(props) => props.theme.colors.grey} !important;
  font-size: ${props => props.theme.fontSizes.small};
  text-wrap: nowrap;
`;

export const OrderQuantCounter = styled.span`
  padding-left: 6px;
  color: ${props => props.theme.colors.grey} !important;
  font-size: ${props => props.theme.fontSizes.small};
`

export const SelectStyle = styled(Select)`

`