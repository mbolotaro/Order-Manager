import styled from "styled-components";

export const ActionIcon = styled.div`
    padding: 2px;
    border-radius: 100%;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.primary}
    }
`