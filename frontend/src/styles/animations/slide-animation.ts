import { keyframes } from "styled-components";

export const slideAnimation = (enter: boolean) => keyframes`
    0% {
        transform: ${enter ? "translateX(100%)" : "translateX(0%)"} ;
        opacity: ${enter ? 0 : 1}
    }
    
    100% {
        transform: ${enter ? "translateX(0%)" : "translateX(100%)"};
        opacity: ${enter ? 1 : 0}
    }
`;