import { StyleColorTypes } from "@/styles/helpers/style-color-types";
import { ReactNode } from "react"

export interface ButtonProps {
    model?: ButtonModel
    styleType?: StyleColorTypes;
    type?: ButtonType
    density?: ButtonDensity;
    icon?: ReactNode;
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    width?: string;
}

export type ButtonModel = 'primary' | 'secondary' | 'terciary'
export type ButtonStyleType = 'default' | 'danger'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonDensity = 'default' | 'compact'