import { Component } from "react"

export interface ButtonProps {
    model?: ButtonModel
    type?: ButtonStyleType;
    icon?: Component;
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;  
}

export type ButtonModel = 'primary' | 'secondary' | 'terciary'
export type ButtonStyleType = 'default' | 'danger'