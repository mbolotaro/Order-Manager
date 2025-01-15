import { ReactNode } from "react";

export interface ModalProps {
    title: string;
    width: string;
    height?: string;
    children?: ReactNode;
    opened: boolean;
    close: () => void;
}