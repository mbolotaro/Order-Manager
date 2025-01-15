import { StyleColorTypes } from "@/styles/helpers/style-color-types";
import { ReactNode } from "react";

export interface ToastProps {
    message: string;
    styleType: StyleColorTypes;
    position: number;
    icon?: ReactNode;
    onClose: (message: string) => void;
}