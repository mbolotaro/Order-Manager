import { UseFormRegisterReturn } from "react-hook-form";

export interface TextFieldProps {
  label: string;
  id: string;
  errorMessage?: string;
  disabled?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
  onChange?: (value: string) => void;
}