export interface CreateOrderModel {
  name: string;
  attendantId?: number;
  isOpened: boolean;
}

export interface ViewOrderModel extends CreateOrderModel {
  id: number;
  createdAt: Date;
}

export type UpdateOrderModel = Partial<CreateOrderModel>
