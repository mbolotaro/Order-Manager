import { BaseStyleProps } from "@/styles/helpers/base-style-props";

export interface RowStyleProps extends BaseStyleProps {
  $gap: string;
  $justify: JustifyValueTypes;
  $wrap?: boolean;
  $wrapAt?: string;
  $justifyWrapped?: JustifyValueTypes
}

export type JustifyValueTypes = "center" | "space-around" | "space-between" | "start" | "end"