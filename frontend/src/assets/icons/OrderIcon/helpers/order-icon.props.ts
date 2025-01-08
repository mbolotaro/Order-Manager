import { styleColorTypes } from "@/styles/helpers/style-color-types";

export interface IOrderProps {
    size: number | string;
    styleType?: styleColorTypes;
    color?: string;
}