import styled, { css } from "styled-components";
import { SkeletonStyleProps } from "./helpers/skeleton-style-props";
import { skeletonAnimation } from "@/styles/utils/animations/skeleton-animation";

export const SkeletonStyle = styled.div<SkeletonStyleProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background: ${(props) =>
    props.theme.name === "dark"
      ? css`linear-gradient(90deg, #4e4e4e 25%, #414040 50%, #4e4e4e 75%)`
      : css`linear-gradient(90deg,#b1b1b1 25%,#797979 50%, #b1b1b1 75%)`};
  animation: ${skeletonAnimation()} 1.5s infinite;
  background-size: 200% 100%;
`;