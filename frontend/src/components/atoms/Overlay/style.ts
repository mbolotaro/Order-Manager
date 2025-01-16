import { fade } from "@/styles/animations/fade-in-animation";
import styled from "styled-components";
import { OverlayStyleProps } from "./helpers/overlay-style-props";

export const OverlayStyle = styled.div<OverlayStyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.grey};
  position: fixed;
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