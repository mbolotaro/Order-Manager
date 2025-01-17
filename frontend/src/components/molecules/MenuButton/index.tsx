import MenuIcon from "@/assets/icons/MenuIcon";
import { MenuButtonStyle } from "./style";
import { MenuButtonProps } from "./helpers/menu-button-props";

export default function MenuButton(props: MenuButtonProps) {
    return <MenuButtonStyle onClick={props.onClick}>
        <MenuIcon size={40} styleType="text"/>
    </MenuButtonStyle> 
}