export interface ISelectProps<T extends selectPropTypes> {
  items: T[];
  customEmptyMessage?: string;
  customNotSelectMessage?: string;
  itemTitle?: keyof T;
  itemValue?: keyof T;
  value?: T | T[keyof T];
  onChange?: (value: T[keyof T] | T | undefined) => void;
  loading?: boolean;
}

export type selectPropTypes = string | number | object