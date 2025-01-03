import { ButtonModel, ButtonStyleType } from "./button-props.interface";

export interface IButtonStyleProps {
  model: ButtonModel;
  type: ButtonStyleType;
  disabled: boolean;
  loading: boolean;
}