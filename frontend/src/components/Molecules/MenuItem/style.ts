import Link from "next/link";
import styled, { css } from "styled-components";
import { IMenuItemStyleProps } from "./helpers/menu-item-style-props.interface";

export const MenuItemStyle = styled(Link)<IMenuItemStyleProps>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: 600;
  transition: 0.2s;
  gap: 4px;
  margin-left: -6px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.light};
  }

  div {
    padding-right: 20px;
    padding-left: 20px;
    color: ${(props) => props.theme.colors.text} !important;

    svg {
      color: ${(props) => props.theme.colors.text} !important;
    }
  }

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: ${props.theme.colors.light} !important;
    `}
`;