import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import SelectField from "@/components/molecules/SelectField";
import TextField from "@/components/molecules/TextField";
import { useEffect } from "react";
import { CRUDOrderModalTypes, CRUDOrderModalProps } from "./helpers/crud-order-modal-props";
import { useForm } from 'react-hook-form' 
import { yupResolver } from "@hookform/resolvers/yup";
import { CRUDOrderFormStyle } from "./style";
import { useOrder } from "@/hooks/use-order";
import { useAttendant } from "@/hooks/use-attendant";
import { CreateOrderModel } from "@/models/order";
import { orderSchema } from "@/validations/orders/validate-order";
import Row from "@/components/atoms/Row";
import { ViewOrderModalInfo, ViewOrderModalKey, ViewOrderModalValue } from "./style";
import StatusCard from "@/components/atoms/StatusCard";

export const statusValues = [
  {
    name: "🟢 Aberto",
    value: true,
  },
  {
    name: "🔴 Fechado",
    value: false,
  },
];

export default function OrderModal(props: CRUDOrderModalProps) {
    const {
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
    } = useForm({ resolver: yupResolver(orderSchema), defaultValues: {isOpened: true, attendantId: undefined }})

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
        'update': 'Editar Pedido',
        'view': 'Visualizar Pedido'
    }

    const actions: Record<CRUDOrderModalTypes, string> = {
        'create': 'Criar',
        'update': 'Editar',
        'view': 'Visualizar'
    }

    function clearAttendant() {
        setValue('attendantId', undefined)
    }

    async function onSubmit(value: CreateOrderModel) {
        if(props.action === 'create') {
            await create({
                isOpened: value.isOpened,
                name: value.name,
                attendantId: value.attendantId
            })
        } else {
            await update(props.order.id, {
                isOpened: value.isOpened,
                name: value.name,
                attendantId: value.attendantId,
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
        if(props.action !== 'view') {
            handleReset()
            props.close()
        }
    }

    return <Modal opened={props.opened} title={props.action !== 'view' ? titles[props.action] : props.order?.name ?? ''} width="40%" close={props.close}>
        {props.action === 'view' ?
        <>
            <ViewOrderModalInfo>
                <ViewOrderModalKey>Nome: </ViewOrderModalKey> 
                <ViewOrderModalValue>{props.order?.name}</ViewOrderModalValue>
            </ViewOrderModalInfo>
            <ViewOrderModalInfo>
                <ViewOrderModalKey>Status: </ViewOrderModalKey>
                <ViewOrderModalValue>
                    <StatusCard opened={props.order?.isOpened ?? false}/>
                </ViewOrderModalValue>
            </ViewOrderModalInfo>
            <ViewOrderModalInfo>
                <ViewOrderModalKey>Atendente: </ViewOrderModalKey> 
                <ViewOrderModalValue>{props.order?.attendant?.name ?? 'NÃO INFORMADO'}</ViewOrderModalValue>
            </ViewOrderModalInfo> 
        </>
        :
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
            <Row $gap="12px" $padding={{top: '12px'}}>
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
            </Row>
        </CRUDOrderFormStyle>
    }
    </Modal>
}