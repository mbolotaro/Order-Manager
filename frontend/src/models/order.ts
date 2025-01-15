import { Attendant } from "./attendant";

export interface CreateOrderModel {
  name: string;
  attendantId?: number;
  isOpened: boolean;
}

export interface ViewOrderModel extends CreateOrderModel {
  id: number;
  createdAt: Date;
  attendant: Attendant;
}

export type UpdateOrderModel = Partial<CreateOrderModel>

export interface FilterOrderModel extends Partial<Pick<ViewOrderModel, 'isOpened' | 'attendantId'>> {
  createdAt?: FilterByCreatedAtValues
}

export enum FilterByCreatedAtValues {
  Today = 'today',
  Week = 'week',
  Month = 'month'
}