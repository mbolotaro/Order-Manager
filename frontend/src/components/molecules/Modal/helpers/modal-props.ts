import { ReactNode } from "react";

export interface IModalProps {
    title: string;
    width: string;
    height?: string;
    children?: ReactNode;
    opened: boolean;
    close: () => void;
}