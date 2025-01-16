import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import { ButtonDensity, ButtonModel } from "./button-props";

export interface ButtonStyleProps extends BaseStyleProps {
  $model: ButtonModel;
  $density: ButtonDensity;
  $color: string;
  $loading: boolean;
  disabled: boolean;
}