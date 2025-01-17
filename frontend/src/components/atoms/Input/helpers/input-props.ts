import { ReactElement, HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
  id?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  trim?: boolean;
  error?: boolean;
  value?: string;
  icon?: ReactElement;
  register?: UseFormRegisterReturn;
  onChange: (value: string) => void;
  width?: string;
}

