import { TableInstance } from "react-table";

export interface TableProps<T extends object> {
    tableInstance: TableInstance<T>;
    loading: boolean;
}