import { IOrder } from "@/models/order.interface";
import { ITableQuery } from "./table-query.interface";

export interface ITableQueriesData {
    orders: ITableQuery<Omit<IOrder, 'createdAt'> & { createdAt: string}>;
}