import TicketIcon from "@/assets/icons/TicketIcon";
import MenuItem from "@/components/Molecules/MenuItem";
import { LateralMenuStyle } from "./style";
import { useRouter } from "next/router";

export default function LateralMenu() {
    const { pathname } = useRouter()
    return (<LateralMenuStyle>
        <ul>
            <li>
                <MenuItem
                    isSelected={pathname === '/'}
                    name="Tickets" 
                    path="/" 
                    icon={
                        <TicketIcon size={30} styleType={pathname === '/' ? 'light' : 'text'}/>
                    }
                />    
            </li>
        </ul>
    </LateralMenuStyle>)
}