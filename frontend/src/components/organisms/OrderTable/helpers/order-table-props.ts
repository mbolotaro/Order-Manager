import { ViewOrderModel } from "@/models/order";

export interface IOrderTableProps {
  onView: (order: ViewOrderModel) => void;
  onUpdate: (order: ViewOrderModel) => void;
  onDelete: (order: ViewOrderModel) => void;
  onCheckChange?: (orderList: Record<number, boolean>) => void;
  orders: ViewOrderModel[];
  
}