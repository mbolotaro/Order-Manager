import { ButtonDensity, ButtonModel } from "./button-props";

export interface IButtonStyleProps {
  $model: ButtonModel;
  $density: ButtonDensity;
  $color: string;
  $loading: boolean;
  disabled: boolean;
}