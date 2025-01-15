import { ReactNode } from "react"

export interface MenuProps {
    name: string;
    icon: ReactNode;
    path: string;
    isSelected: boolean;
}