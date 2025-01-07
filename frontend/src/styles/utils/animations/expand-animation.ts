import { keyframes } from "styled-components";

export const expandAnimation = () => keyframes`
    0% {
        transform: scale(0%);
    }
    100% {
        transform: scale(100%)
    }
`;