import { IAttendant } from "./attendant.interface";

export interface IOrder {
    id?: number | null;
    createdAt?: Date | null;
    name: string;
    attendantId?: number | null;
    isOpened: boolean;
}

export type ViewOrderModel = IOrder & { attendant: IAttendant }

export type CreateOrderModel = Omit<IOrder, 'id' | 'createdAt'>