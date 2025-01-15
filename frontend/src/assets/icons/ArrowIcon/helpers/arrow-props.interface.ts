import { IBaseIconProps } from "../../_helpers/base-icon-props.interface"

export interface IArrowProps extends IBaseIconProps {
    direction: 'top' | 'bottom' | 'left' | 'right'
}