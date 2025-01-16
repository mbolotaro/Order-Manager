import styled from "styled-components";

export const CRUDTemplateStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: 0px 0px 9px -4px rgba(15, 19, 25, 0.75);
  padding: 18px;
  margin-bottom: 60px;
`;

export const TableToolsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
`

export const CRUDHeadingStyle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large}
`