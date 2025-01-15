import OrderIcon from "@/assets/icons/OrderIcon";
import MenuItem from "@/components/molecules/MenuItem";
import { LateralMenuStyle } from "./style";
import { useRouter } from "next/router";

export default function LateralMenu() {
    const { pathname } = useRouter()
    return (<LateralMenuStyle>
        <ul>
            <li>
                <MenuItem
                    isSelected={pathname === '/'}
                    name="Pedidos" 
                    path="/" 
                    icon={
                        <OrderIcon size={30} styleType={pathname === '/' ? 'light' : 'text'}/>
                    }
                />    
            </li>
        </ul>
    </LateralMenuStyle>)
}