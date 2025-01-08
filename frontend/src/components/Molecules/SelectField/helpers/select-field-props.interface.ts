import { selectPropTypes } from "@/components/Atoms/Select/helpers/select-props.interface";

export interface ISelectFieldProps<T extends selectPropTypes> {
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
    label: string;
}