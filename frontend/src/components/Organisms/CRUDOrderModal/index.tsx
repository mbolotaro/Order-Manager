import Button from "@/components/Atoms/Button";
import Modal from "@/components/Molecules/Modal";
import SelectField from "@/components/Molecules/SelectField";
import TextField from "@/components/Molecules/TextField";
import { useEffect } from "react";
import { CRUDOrderModalTypes, ICRUDOrderModalProps } from "./helpers/crud-order-modal-props.interface";
import { useForm } from 'react-hook-form' 
import { yupResolver } from "@hookform/resolvers/yup";
import { CRUDOrderFormActionsStyle, CRUDOrderFormStyle } from "./style";
import { useOrder } from "@/hooks/use-order";
import { useAttendant } from "@/hooks/use-attendant";
import { statusValues } from "@/models/status.values";
import { CreateOrderModel } from "@/models/order.interface";

export default function CreateOrderModal(props: ICRUDOrderModalProps) {
    const {
        schema,
        loading,
        create
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
        watch,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema), defaultValues: {isOpened: true }})

    const currentStatus = watch()

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

    async function onSubmit(value: CreateOrderModel) {
        await create({
            isOpened: value.isOpened,
            name: value.name,
            attendantId: value.attendantId ?? null
        })
    }
    async function onInvalid(value: object) {
        console.log(value)
    }

    return <Modal opened={props.opened} title={titles[props.action]} width="50%" close={props.onClose}>
        <CRUDOrderFormStyle onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <TextField 
                id="order-name" 
                label="Nome" 
                errorMessage={errors.name?.message} 
                register={register('name')}
            />
            {props.action === 'update' &&
            <SelectField 
                id="order-status" 
                items={statusValues} 
                itemTitle="name"
                itemValue="value"
                label="Status" 
                errorMessage={errors.isOpened?.message}
                register={register('isOpened')}
            />
            }
            <SelectField 
                id="order-attendant" 
                items={attendants} 
                itemTitle="name" 
                itemValue="id" 
                label="Atendente" 
                clearable 
                errorMessage={errors.attendantId?.message} 
                loading={attendantsLoading}
                register={register('attendantId')}
                isOpcional={currentStatus.isOpened}
            />
            <CRUDOrderFormActionsStyle>
                <Button 
                    text="Cancelar" 
                    onClick={() => props.onClose()} 
                    model="secondary" 
                    loading={loading}
                />
                <Button 
                    text={actions[props.action]} 
                    type="submit" 
                    loading={loading}
                />
            </CRUDOrderFormActionsStyle>
        </CRUDOrderFormStyle>
    </Modal>
}