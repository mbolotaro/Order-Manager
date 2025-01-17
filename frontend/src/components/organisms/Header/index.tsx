import HomeButton from "@/components/molecules/HomeButton";
import { HeaderStyle } from "./style";
import MenuButton from "@/components/molecules/MenuButton";
import ToggleThemeButton from "@/components/molecules/ToggleThemeButton";
import { HeaderProps } from "./helpers/header-props";

export default function Header(props: HeaderProps) {
    return <HeaderStyle>
        <MenuButton onClick={props.onRailLateralMenu}/>
        <HomeButton/>
        <ToggleThemeButton/>
    </HeaderStyle>
}