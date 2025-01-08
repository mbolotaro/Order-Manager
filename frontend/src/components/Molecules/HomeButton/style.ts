import styled from "styled-components";

export const HomeButtonStyle = styled.div`
    display: flex;
    align-items: center;
    
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.fontSizes.extraLarge};
        font-weight: 600;
    }
`