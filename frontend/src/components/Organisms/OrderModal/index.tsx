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

export default function OrderModal(props: ICRUDOrderModalProps) {
    const {
        schema,
        loading,
        create,
        update
    } = useOrder()

    const {
        getAll : getAllAttendants,
        listLoading: attendantsLoading,
        attendants
    } = useAttendant()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm({ resolver: yupResolver(schema), defaultValues: {isOpened: true, attendantId: undefined }})

    useEffect(() => {
        if(props.opened) {
            const fetchData = async () => {
                await getAllAttendants()
            }
            fetchData()
        }
    })

    const currentStatus = watch('isOpened') as string | boolean

    useEffect(() => {
        if(props.action === 'update' && props.order) {
            setValue('name', props.order.name)
            setValue('isOpened', props.order.isOpened)
            setValue('attendantId', props.order.attendantId ?? undefined)
        }
    }, [props, setValue])

    const titles: Record<CRUDOrderModalTypes, string> = {
        'create': 'Criar Pedido',
        'update': 'Editar Pedido'
    }

    const actions: Record<CRUDOrderModalTypes, string> = {
        'create': 'Criar',
        'update': 'Editar'
    }

    function clearAttendant() {
        setValue('attendantId', undefined)
    }

    async function onSubmit(value: CreateOrderModel) {
        console.log(value)
        if(props.action === 'create') {
            await create({
                isOpened: value.isOpened,
                name: value.name,
                attendantId: value.attendantId ?? null
            })
        } else {
            await update({
                isOpened: value.isOpened,
                name: value.name,
                attendantId: value.attendantId ?? null,
                id: props.order?.id
            })
        }

        handleClose()
    }

    function handleReset() {
        setValue('name', '')
        setValue('attendantId', undefined)
        setValue('isOpened', true)
    }

    function handleClose() {
        handleReset()
        props.close()
    }

    return <Modal opened={props.opened} title={titles[props.action]} width="50%" close={props.close}>
        <CRUDOrderFormStyle onSubmit={handleSubmit(onSubmit)}>
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
                isOptional={currentStatus === 'true' || currentStatus === true}
                loading={attendantsLoading}
                register={register('attendantId')}
                onClear={clearAttendant}
            />
            <CRUDOrderFormActionsStyle>
                <Button 
                    text="Cancelar" 
                    onClick={handleClose} 
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