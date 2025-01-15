import { ViewOrderModel } from "@/models/order";

export interface IViewOrderModalPropsInterface {
    opened: boolean;
    close: () => void;
    order?: ViewOrderModel;
}