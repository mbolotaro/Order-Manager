import { ViewOrderModel } from "@/models/order";

export interface OrderTableProps {
  onView: (order: ViewOrderModel) => void;
  onUpdate: (order: ViewOrderModel) => void;
  onDelete: (order: ViewOrderModel) => void;
  onCheckChange?: (orderList: Record<number, boolean>) => void;
  onSelectAll?: (value: boolean) => void;
  checkedItems: Record<number, boolean>;
  allSelected: boolean;
  loading: boolean;
  orders: ViewOrderModel[];
  
}