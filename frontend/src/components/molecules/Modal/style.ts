import styled from "styled-components";
import { ModalStyleProps } from "./helpers/modal-style-props";
import { expandAnimation } from "@/styles/animations/expand-animation";
import { shrinkAnimation } from "@/styles/animations/shrink-animation";
import { ModalContainerStyleProps } from "./helpers/modal-container-style-props";

export const ModalContainerStyle = styled.div<ModalContainerStyleProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  top: 0;
  pointer-events: ${props => props.$opened? 'all' : 'none'};
`;

export const ModalStyle = styled.dialog<ModalStyleProps>`
  padding: 16px;
  border: 0; 
  position: initial;
  -webkit-box-shadow: 6px 9px 32px -8px rgba(15, 19, 25, 1);
  -moz-box-shadow: 6px 9px 32px -8px rgba(15, 19, 25, 1);
  box-shadow: 6px 9px 32px -8px rgba(15, 19, 25, 1);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-radius: 6px;
  animation: ${(props) => (props.open ? (props.$animateEnd ? shrinkAnimation() : expandAnimation()) : 'none')} ${props => props.$duration}s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: all;
  font-weight: 600;
`;

export const ModalHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: end;

  span {
    margin-right: 2px;
    flex: 1;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.large};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: block;
  }
`;

export const CloseIconStyle = styled.div`
  cursor: pointer;
`