import { ReactNode } from "react"

export interface IMenuProps {
    name: string;
    icon: ReactNode;
    path: string;
    isSelected: boolean;
}