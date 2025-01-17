import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import { ReactNode } from "react";
import { JustifyValueTypes } from "./row-style-props";

export interface RowProps extends BaseStyleProps {
    children: ReactNode;
    $gap?: string;
    $justify?: JustifyValueTypes;
    $wrap?: boolean;
    $wrapAt?: string;
    $justifyWrapped?: JustifyValueTypes;
}