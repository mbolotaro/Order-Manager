import { styleColorTypes } from "@/styles/helpers/style-color-types";
import { ReactNode } from "react"

export interface IButtonProps {
    model?: ButtonModel
    styleType?: styleColorTypes;
    type?: ButtonType
    density?: ButtonDensity;
    icon?: ReactNode;
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export type ButtonModel = 'primary' | 'secondary' | 'terciary'
export type ButtonStyleType = 'default' | 'danger'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonDensity = 'default' | 'compact'