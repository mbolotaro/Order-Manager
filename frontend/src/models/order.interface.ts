import { OrderStatus } from "./enums/order-status.enum";

export interface IOrder {
    id: number;
    createdAt: Date;
    name: string;
    attendantId?: number;
    status: OrderStatus;
}

export type CreateOrderModel = Omit<IOrder, 'id' | 'createdAt'>