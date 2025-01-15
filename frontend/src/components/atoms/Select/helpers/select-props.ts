import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectProps<T extends SelectPropTypes> {
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
  error?: boolean;
  clearable?: boolean;
  register?: UseFormRegisterReturn;
}

export type SelectPropTypes = string | number | object