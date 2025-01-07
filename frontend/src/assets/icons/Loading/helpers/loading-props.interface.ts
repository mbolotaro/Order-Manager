import { styleColorTypes } from "@/styles/helpers/style-color-types";

export interface ILoadingProps {
    styleType?: styleColorTypes;
    color?: string
    duration?: number;
    size?: number;
}