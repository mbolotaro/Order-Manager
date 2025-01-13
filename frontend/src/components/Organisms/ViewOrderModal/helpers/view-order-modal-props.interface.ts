import { ViewOrderModel } from "@/models/order.interface";

export interface IViewOrderModalPropsInterface {
    opened: boolean;
    close: () => void;
    order?: ViewOrderModel;
}