export interface ICRUDOrderModalProps {
    action: CRUDOrderModalTypes
    opened: boolean
    onClose: () => void;
}

export type CRUDOrderModalTypes = 'create' | 'update'