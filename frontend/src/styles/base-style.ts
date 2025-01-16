import { css } from "styled-components";
import { BaseStyleProps } from "./helpers/base-style-props";

export const baseStyle = css<BaseStyleProps>`
  padding: ${(props) =>
    typeof props.$padding === "string" ? props.$padding : 'none'};
  padding-top: ${(props) =>
    typeof props.$padding === "object" ? (props.$padding.top ?? props.$padding.y) : "none"};

  padding-bottom: ${(props) =>
    typeof props.$padding === "object" ? (props.$padding.bottom ?? props.$padding.y): 'none'};
      
  padding-left: ${(props) =>
    typeof props.$padding === "object" ? (props.$padding.left ?? props.$padding.x ) : "none"};
  padding-right: ${(props) =>
    typeof props.$padding === "object" ? (props.$padding.right ?? props.$padding.x) : "none"};

  margin: ${(props) =>
    typeof props.$margin === "string" ? props.$margin : 'none'};
  margin-top: ${(props) =>
    typeof props.$margin === "object" ? (props.$margin.top ?? props.$margin.y) : "none"};
  margin-bottom: ${(props) =>
    typeof props.$margin === "object" ? (props.$margin.bottom ?? props.$margin.y) : "none"};
  margin-left: ${(props) =>
    typeof props.$margin === "object" ? (props.$margin.left ?? props.$margin.x) : "none"};
  margin-right: ${(props) => typeof props.$margin === "object" ? (props.$margin.right ?? props.$margin.x) : "none"};

  width: ${props => props.$width};
  height: ${props => props.$height};
  
  min-width: ${props => props.$minWidth};
  max-width: ${props => props.$maxWidth};
  min-height: ${props => props.$minHeight};
  max-height: ${props => props.$maxHeight};
`;