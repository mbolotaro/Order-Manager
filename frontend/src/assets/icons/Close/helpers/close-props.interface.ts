import { styleColorTypes } from "@/styles/helpers/style-color-types";

export interface ICloseProps {
    styleType?: styleColorTypes;
    color?: string
    size: number;
    onClick?: () => void
}