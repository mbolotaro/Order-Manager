import { IOrder } from "@/models/order.interface";

export interface IDeleteOrderProps {
    order?: IOrder;
    opened: boolean;
    many?: boolean;
    ordersId?: number[];
    close: () => void;
}