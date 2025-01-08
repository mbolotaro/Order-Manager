import Button from "@/components/Atoms/Button";
import Modal from "@/components/Molecules/Modal";
import SelectField from "@/components/Molecules/SelectField";
import TextField from "@/components/Molecules/TextField";
import { useEffect, useState } from "react";
import { CRUDTicketModalTypes, ICRUDTicketModalProps } from "./helpers/crud-ticket-modal-props.interface";
import { useForm } from 'react-hook-form' 
import { yupResolver } from "@hookform/resolvers/yup";
import { CRUDTicketFormActionsStyle, CRUDTicketFormStyle } from "./style";
import { useTicket } from "@/hooks/use-ticket";
import { useAttendant } from "@/hooks/use-attendant";

export default function CreateTicketModal(props: ICRUDTicketModalProps) {
    const {
        schema,
        loading
    } = useTicket()

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

    const titles: Record<CRUDTicketModalTypes, string> = {
        'create': 'Criar Chamado',
        'update': 'Editar Chamado'
    }

    const actions: Record<CRUDTicketModalTypes, string> = {
        'create': 'Criar',
        'update': 'Editar'
    }

    function onSubmit() {
    }

    return <Modal opened={opened} title={titles[props.action]} width="50%" close={() => setOpened(false)}>
        <CRUDTicketFormStyle onSubmit={handleSubmit(onSubmit)}>
            <TextField id="ticket-name" label="Nome" errorMessage={errors.name?.message} register={register('name')}/>
            <SelectField id="ticket-status" items={[]} label="Status" errorMessage={errors.status?.message}/>
            <SelectField id="ticket-attendant" items={[]} label="Atendente " errorMessage={errors.attendant?.message} loading={attendantsLoading}/>
            <CRUDTicketFormActionsStyle>
                <Button text="Cancelar" model="secondary" loading={loading}/>
                <Button text={actions[props.action]} type="submit" loading={loading}/>
            </CRUDTicketFormActionsStyle>
        </CRUDTicketFormStyle>
    </Modal>
}