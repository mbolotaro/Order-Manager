import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import { ReactNode } from "react";

export interface RowProps extends BaseStyleProps {
    children: ReactNode;
    $gap?: string;
    $justify?: 'center' | 'space-around' | 'space-between' | 'start' | 'end';
    $wrap?: boolean;
}