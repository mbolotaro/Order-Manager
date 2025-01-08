import { styleColorTypes } from "@/styles/helpers/style-color-types";

export interface ITicketProps {
    size: number | string;
    styleType?: styleColorTypes;
    color?: string;
}