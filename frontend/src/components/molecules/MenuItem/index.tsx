import { IMenuProps } from "./helpers/menu-item-props.interface";
import { MenuItemStyle } from "./style";

export default function MenuItem(props: IMenuProps) {
    return <MenuItemStyle href={props.path} $isSelected={props.isSelected}>
        <div>
            {props.icon}
        </div>
        {props.name}
    </MenuItemStyle>
}