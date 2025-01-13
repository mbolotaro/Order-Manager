import { IOrder } from "@/models/order.interface";

export interface ICRUDOrderModalProps {
    action: CRUDOrderModalTypes
    opened: boolean
    close: () => void;
    order?: IOrder;
}

export type CRUDOrderModalTypes = 'create' | 'update'