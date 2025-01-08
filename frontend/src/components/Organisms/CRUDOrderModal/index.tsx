import Button from "@/components/Atoms/Button";
import Modal from "@/components/Molecules/Modal";
import SelectField from "@/components/Molecules/SelectField";
import TextField from "@/components/Molecules/TextField";
import { useEffect, useState } from "react";
import { CRUDOrderModalTypes, ICRUDOrderModalProps } from "./helpers/crud-order-modal-props.interface";
import { useForm } from 'react-hook-form' 
import { yupResolver } from "@hookform/resolvers/yup";
import { CRUDOrderFormActionsStyle, CRUDOrderFormStyle } from "./style";
import { useOrder } from "@/hooks/use-order";
import { useAttendant } from "@/hooks/use-attendant";

export default function CreateOrderModal(props: ICRUDOrderModalProps) {
    const {
        schema,
        loading
    } = useOrder()

    const {
        getAll : getAllAttendants,
        listLoading: attendantsLoading,
        alreadyListLoaded: alreadyAttendantsLoaded,
        attendants
    } = useAttendant()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema)})

    const [opened, setOpened] = useState(true)

    useEffect(() => {

        if(!alreadyAttendantsLoaded) {
            getAllAttendants()
        }
    }, [alreadyAttendantsLoaded, getAllAttendants])

    const titles: Record<CRUDOrderModalTypes, string> = {
        'create': 'Criar Pedido',
        'update': 'Editar Pedido'
    }

    const actions: Record<CRUDOrderModalTypes, string> = {
        'create': 'Criar',
        'update': 'Editar'
    }

    function onSubmit() {
    }

    return <Modal opened={opened} title={titles[props.action]} width="50%" close={() => setOpened(false)}>
        <CRUDOrderFormStyle onSubmit={handleSubmit(onSubmit)}>
            <TextField id="order-name" label="Nome" errorMessage={errors.name?.message} register={register('name')}/>
            <SelectField id="order-status" items={[]} label="Status" errorMessage={errors.status?.message}/>
            <SelectField id="order-attendant" items={[]} label="Atendente " errorMessage={errors.attendant?.message} loading={attendantsLoading}/>
            <CRUDOrderFormActionsStyle>
                <Button text="Cancelar" model="secondary" loading={loading}/>
                <Button text={actions[props.action]} type="submit" loading={loading}/>
            </CRUDOrderFormActionsStyle>
        </CRUDOrderFormStyle>
    </Modal>
}