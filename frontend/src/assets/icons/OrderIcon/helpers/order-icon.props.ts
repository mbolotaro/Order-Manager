import { StyleColorTypes } from "@/styles/helpers/style-color-types";

export interface OrderProps {
    size: number | string;
    styleType?: StyleColorTypes;
    color?: string;
}