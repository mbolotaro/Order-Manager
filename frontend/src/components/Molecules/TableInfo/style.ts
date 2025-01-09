import styled from "styled-components";

export const InfoRowStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const InfoKeyStyle = styled.span`
    color: ${props => props.theme.colors.grey}
`

export const InfoValueStyle = styled.span`
  font-weight: 600;
`;
