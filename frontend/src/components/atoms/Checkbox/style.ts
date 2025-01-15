import styled from "styled-components";

export const RealCheckbox = styled.input`
    display: none;
`

export const CustomCheckbox = styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 2px;
    transition: .2s;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CustomCheckedMarkation = styled.div`
    pointer-events: none;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    border: 0px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

`