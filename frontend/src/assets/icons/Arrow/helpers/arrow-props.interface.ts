import { styleColorTypes } from "@/styles/helpers/style-color-types"

export interface IArrowProps {
    styleType?: styleColorTypes;
    color?: string
    direction: 'top' | 'bottom' | 'left' | 'right'
    size?: number
}