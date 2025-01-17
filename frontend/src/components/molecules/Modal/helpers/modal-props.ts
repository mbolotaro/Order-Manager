import { BaseStyleProps } from "@/styles/helpers/base-style-props";
import { ReactNode } from "react";

export interface ModalProps extends BaseStyleProps {
    title: string;
    children?: ReactNode;
    opened: boolean;
    headerActions?: ReactNode;
    close: () => void;
}