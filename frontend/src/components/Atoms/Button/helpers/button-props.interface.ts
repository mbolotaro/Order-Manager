import { styleColorTypes } from "@/styles/helpers/style-color-types";
import { Component } from "react"

export interface IButtonProps {
    model?: ButtonModel
    styleType?: styleColorTypes;
    type?: ButtonType
    icon?: Component;
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export type ButtonModel = 'primary' | 'secondary' | 'terciary'
export type ButtonStyleType = 'default' | 'danger'
export type ButtonType = 'button' | 'submit' | 'reset'