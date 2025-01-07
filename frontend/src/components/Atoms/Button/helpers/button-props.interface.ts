import { styleColorTypes } from "@/styles/helpers/style-color-types";
import { Component } from "react"

export interface ButtonProps {
    model?: ButtonModel
    type?: styleColorTypes;
    icon?: Component;
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;  
}

export type ButtonModel = 'primary' | 'secondary' | 'terciary'
export type ButtonStyleType = 'default' | 'danger'