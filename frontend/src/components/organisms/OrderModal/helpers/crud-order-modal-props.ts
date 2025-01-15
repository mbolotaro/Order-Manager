import { IOrder } from "@/models/order";

export interface ICRUDOrderModalProps {
    action: CRUDOrderModalTypes
    opened: boolean
    close: () => void;
    order?: IOrder;
}

export type CRUDOrderModalTypes = 'create' | 'update'