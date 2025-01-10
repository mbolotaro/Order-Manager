import { TableInstance } from "react-table";

export interface ITableProps<T extends object> {
    tableInstance: TableInstance<T>;
}