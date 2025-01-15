import { fade } from "@/styles/utils/animations/fade-in-animation";
import styled from "styled-components";
import { IOverlayStyleProps } from "./helpers/overlay-style-props.interface";

export const OverlayStyle = styled.div<IOverlayStyleProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.grey};
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: ${props => props.$active ? 'all' : 'none'};
  opacity: ${props => props.$active ? 0.4 : 0};
  animation: ${props => props.$active ? (props.$animateEnd ? fade(0.4, 0) : fade(0, 0.4)) : 'none'} ${props => props.$duration}s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;