import { ViewOrderModel } from "@/models/order";

export type CRUDOrderModalProps =
  | {
      action: "create";
      opened: boolean;
      close: () => void;
    }
  | {
      action: "update";
      opened: boolean;
      close: () => void;
      order: ViewOrderModel;
    };

export type CRUDOrderModalTypes = 'create' | 'update'