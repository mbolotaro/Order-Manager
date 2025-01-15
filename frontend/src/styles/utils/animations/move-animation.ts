import { keyframes } from "styled-components";

export const moveAnimation = (x: string, y: string) => keyframes`
from {
    transform: translate(0, 0)
}
to {
    transform: translate(${x}, ${y})
}
`;