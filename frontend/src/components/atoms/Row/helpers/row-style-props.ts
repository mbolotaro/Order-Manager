import { BaseStyleProps } from "@/styles/helpers/base-style-props";

export interface RowStyleProps extends BaseStyleProps {
  $gap: string;
  $justify: "center" | "space-around" | "space-between" | "start" | "end";
  $wrap?: boolean;
}