export interface IOrder {
    id?: number;
    createdAt?: Date;
    name: string;
    attendantId?: number;
    isOpened: boolean;
}

export type CreateOrderModel = Omit<IOrder, 'id' | 'createdAt'>