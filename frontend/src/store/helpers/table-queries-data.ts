import { FilterOrderModel, ViewOrderModel } from "@/models/order";
import { TableQuery } from "./table-query";

export interface TableQueriesData {
    orders: OrderQueries;
}

export type OrderQueries = TableQuery<ViewOrderModel, FilterOrderModel>;