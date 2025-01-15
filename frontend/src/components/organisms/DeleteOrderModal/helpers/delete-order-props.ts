import { IOrder } from "@/models/order";

export interface IDeleteOrderProps {
    order?: IOrder;
    opened: boolean;
    many?: boolean;
    ordersId?: number[];
    close: () => void;
}