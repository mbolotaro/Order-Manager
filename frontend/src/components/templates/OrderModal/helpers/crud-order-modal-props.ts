import { ViewOrderModel } from "@/models/order";

export type CRUDOrderModalProps =
  | {
      action: "create";
      opened: boolean;
      close: () => void;
    }
  | {
      action: "update" | "view";
      opened: boolean;
      close: () => void;
      order: ViewOrderModel;
      setAction?: (action: CRUDOrderModalTypes) => void;
      openDeleteModal?: () => void;
    };

export type CRUDOrderModalTypes = 'create' | 'update' | 'view'