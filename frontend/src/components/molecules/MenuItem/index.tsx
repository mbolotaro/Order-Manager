import { MenuProps } from "./helpers/menu-item-props";
import { MenuItemStyle } from "./style";

export default function MenuItem(props: MenuProps) {
    return <MenuItemStyle href={props.path} $isSelected={props.isSelected}>
        <div>
            {props.icon}
        </div>
        {props.name}
    </MenuItemStyle>
}