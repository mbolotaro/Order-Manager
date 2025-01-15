import { ButtonDensity, ButtonModel } from "./button-props";

export interface ButtonStyleProps {
  $model: ButtonModel;
  $density: ButtonDensity;
  $color: string;
  $loading: boolean;
  disabled: boolean;
}