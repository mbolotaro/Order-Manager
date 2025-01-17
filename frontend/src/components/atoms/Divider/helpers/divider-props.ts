import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import { StyleColorTypes } from "@/styles/helpers/style-color-types";

export interface DividerProps extends BaseStyleProps {
    styleType?: StyleColorTypes;
    color?: string;
    size?: string;
}