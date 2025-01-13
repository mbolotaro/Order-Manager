import Button from "@/components/Atoms/Button";
import Modal from "@/components/Molecules/Modal";
import SelectField from "@/components/Molecules/SelectField";
import { useAttendant } from "@/hooks/use-attendant";
import { statusValues } from "@/models/status.values";
import { IFilterOrderModalProps } from "./helpers/filter-order-modal-props.interface";

export default function FilterOrderModal(props: IFilterOrderModalProps) {

    const {
        listLoading,
        attendants
    } = useAttendant()

    const dateOptions = [
        { name: 'Hoje', value: 'today'},
        { name: 'Há 7 dias', value: '7'},
        { name: 'Há 30 dias', value: '30'}
    ]

    return <Modal opened={props.opened} close={props.close} title="Filtrar Lista de Pedidos" width="600px">
        <SelectField 
            id="order-status-filter" 
            label="Status" 
            items={statusValues} 
            itemTitle="name" 
            itemValue="value"
            clearable
        />
        <SelectField
            id="order-attendant-filter"
            label="Atendente"
            items={attendants}
            itemTitle="name"
            itemValue="id"
            loading={listLoading}
            clearable
        />
        <SelectField
            id="order-date-filter"
            label="Criado em: "
            items={dateOptions}
            itemTitle="name"
            itemValue="value"
            clearable
        />
        
        <Button text="Limpar Campos" model="terciary"/>
        <Button text="Descartar Alterações" model="secondary"/>
        <Button text="Confirmar" model="primary"/>
    </Modal>
}