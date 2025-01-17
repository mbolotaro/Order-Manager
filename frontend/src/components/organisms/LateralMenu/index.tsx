import OrderIcon from "@/assets/icons/OrderIcon";
import MenuItem from "@/components/molecules/MenuItem";
import { LateralMenuStyle } from "./style";
import { useRouter } from "next/router";
import { LateralMenuProps } from "./helpers/lateral-menu-props";

export default function LateralMenu(props: LateralMenuProps) {
    const { pathname } = useRouter()
    return (<LateralMenuStyle $rail={props.rail}>
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