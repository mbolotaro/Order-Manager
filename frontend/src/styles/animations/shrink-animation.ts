import { keyframes } from "styled-components";

export const shrinkAnimation = () => keyframes`
    0% {
        transform: scale(100%);
        opacity: 100;
    }
    100% {
        transform: scale(0%);
        opacity: 0;
    }
`;