import { ButtonModel } from "./button-props.interface";

export interface IButtonStyleProps {
  model: ButtonModel;
  color: string;
  disabled: boolean;
  loading: boolean;
}