import { ReactElement, HTMLInputTypeAttribute } from "react";

export interface InputProps{
  id?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  trim?: boolean;
  error?: boolean;
  value: string | undefined;
  icon?: ReactElement;
  onChange: (value: string) => void;
}

