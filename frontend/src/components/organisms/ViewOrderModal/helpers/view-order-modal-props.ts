import { ViewOrderModel } from "@/models/order";

export interface ViewOrderModalPropsInterface {
    opened: boolean;
    close: () => void;
    order?: ViewOrderModel;
}