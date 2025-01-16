import styled from "styled-components";
import { ToastStyleProps } from "./helpers/toast-style-props";
import { slideAnimation } from "@/styles/animations/slide-animation";

export const ToastStyle = styled.div<ToastStyleProps>`
  position: fixed;
  top: ${(props) => `calc(${props.$position * 60}px + 8px)`};
  right: 8px;
  width: 140px;
  min-width: min-content;
  z-index: 101;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  animation: ${slideAnimation(true)} ${props => `${props.$duration}s`} ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding-right: 7px;
  border: 1px solid ${props => props.theme.colors[props.$styleType]};

  .toast-mark {
    width: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors[props.$styleType]};
    height: 100%;
  }

  .toast-message {
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-wrap: nowrap;
    font-weight: 600;
    gap: 4px;
  }

  .toast-close {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    cursor: pointer;
    border-radius: 100%;
  }
`;