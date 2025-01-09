export interface ISelectProps<T extends selectPropTypes> {
  id: string;
  items: T[];
  customEmptyMessage?: string;
  customNotSelectedMessage?: string;
  itemTitle?: keyof T;
  itemValue?: keyof T;
  value?: T | T[keyof T];
  onChange?: (value: T[keyof T] | T | undefined) => void;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  clearable?: boolean;
}

export type selectPropTypes = string | number | object