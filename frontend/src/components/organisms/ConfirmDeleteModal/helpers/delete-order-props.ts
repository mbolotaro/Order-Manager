export interface ConfirmDeleteProps {
    title: string;
    subtitle: string;
    opened: boolean;
    loading?: boolean;
    lazy?: boolean;
    
    onConfirm: () => void;
    close: () => void;
}