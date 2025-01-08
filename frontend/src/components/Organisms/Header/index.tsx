import HomeButton from "@/components/Molecules/HomeButton";
import { HeaderStyle } from "./style";
import MenuButton from "@/components/Molecules/MenuButton";

export default function Header() {
    return <HeaderStyle>
        <MenuButton/>
        <HomeButton/>
    </HeaderStyle>
}