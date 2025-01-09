export interface IOrder {
    id?: string | null;
    createdAt?: Date | null;
    name: string;
    attendantId?: string | null;
    isOpened: boolean;
}

export type CreateOrderModel = Omit<IOrder, 'id' | 'createdAt'>