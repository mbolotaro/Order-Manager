import { SelectPropTypes } from "@/components/atoms/Select/helpers/select-props";
import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectFieldProps<T extends SelectPropTypes> {
  id: string;
  items: T[];
  customEmptyMessage?: string;
  customNotSelectedMessage?: string;
  itemTitle?: keyof T;
  itemValue?: keyof T;
  value?: T | T[keyof T];
  onChange?: (value: T[keyof T] | T | undefined) => void;
  onClear?: () => void;
  loading?: boolean;
  disabled?: boolean;
  label: string;
  errorMessage?: string;
  clearable?: boolean;
  register?: UseFormRegisterReturn;
  isOptional?: boolean;
}