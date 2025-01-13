import HomeButton from "@/components/Molecules/HomeButton";
import { HeaderStyle } from "./style";
import MenuButton from "@/components/Molecules/MenuButton";
import ToggleThemeButton from "@/components/Molecules/ToggleThemeButton";

export default function Header() {
    return <HeaderStyle>
        <MenuButton/>
        <HomeButton/>
        <ToggleThemeButton/>
    </HeaderStyle>
}