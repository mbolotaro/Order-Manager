import { IOrder } from "@/models/order";
import { ITableQuery } from "./table-query";

export interface ITableQueriesData {
    orders: ITableQuery<Omit<IOrder, 'createdAt'> & { createdAt: string}>;
}