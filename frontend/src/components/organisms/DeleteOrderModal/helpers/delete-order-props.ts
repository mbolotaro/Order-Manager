import { ViewOrderModel } from "@/models/order";

export interface DeleteOrderProps {
    order?: ViewOrderModel;
    opened: boolean;
    many?: boolean;
    ordersId?: number[];
    close: () => void;
}