import { StyleColorTypes } from "@/styles/helpers/style-color-types";
import { ReactNode } from "react";

export interface IconButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    onDenyClick?: () => void;
    styleType?: StyleColorTypes;
    color?: string;
}