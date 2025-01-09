import TableInfo from "@/components/Molecules/TableInfo";
import { ButtonContainerStyle, CRUDTemplateView, TableToolsStyle } from "./style";
import OrderTable from "@/components/Organisms/OrderTable";
import Button from "@/components/Atoms/Button";
import SearchInput from "@/components/Molecules/SearchInput";
import Divider from "@/components/Atoms/Divider";
import Plus from "@/assets/icons/Plus";
import CreateOrderModal from "@/components/Organisms/CRUDOrderModal";
import { useState } from "react";

export default function OrderCRUD() {
    const tableInfos = [
            {
                key: 'Todos os Pedidos',
                value: '44000'
            },
            {
                key: 'Pedidos Abertos',
                value: '400'
            }
        ]
    
    const [ modalOpened, setModalOpened ] = useState(false)
    
    return <CRUDTemplateView>
        <h2>Pedidos</h2>
        <TableInfo infos={tableInfos}/>
        <Divider styleType="background" size="1px"/>
        <TableToolsStyle>
            <ButtonContainerStyle>
                <Button text="Adicionar Pedido" icon={<Plus size={24} styleType="light"/>} density="compact" onClick={() => setModalOpened(true)}/>
            </ButtonContainerStyle>
            <div>
            <SearchInput/>
            </div>
        </TableToolsStyle>
        <OrderTable/>
        <CreateOrderModal action="create" opened={modalOpened} onClose={() => setModalOpened(false)}/>
    </CRUDTemplateView>
}