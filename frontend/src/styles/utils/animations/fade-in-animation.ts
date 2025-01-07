import { keyframes } from "styled-components";

export const fade = (initialOpacity: number, finalOpacity: number) => keyframes`
    0% {
       opacity: ${initialOpacity}
    }
    100% {
        opacity: ${finalOpacity}
    }
`;