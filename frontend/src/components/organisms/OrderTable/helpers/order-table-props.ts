import { ViewOrderModel } from "@/models/order";

export interface OrderTableProps {
  onView: (order: ViewOrderModel) => void;
  onUpdate: (order: ViewOrderModel) => void;
  onDelete: (order: ViewOrderModel) => void;
  onCheckChange?: (orderList: Record<number, boolean>) => void;
  loading: boolean;
  orders: ViewOrderModel[];
  
}