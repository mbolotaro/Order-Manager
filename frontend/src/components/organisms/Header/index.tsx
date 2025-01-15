import HomeButton from "@/components/molecules/HomeButton";
import { HeaderStyle } from "./style";
import MenuButton from "@/components/molecules/MenuButton";
import ToggleThemeButton from "@/components/molecules/ToggleThemeButton";

export default function Header() {
    return <HeaderStyle>
        <MenuButton/>
        <HomeButton/>
        <ToggleThemeButton/>
    </HeaderStyle>
}