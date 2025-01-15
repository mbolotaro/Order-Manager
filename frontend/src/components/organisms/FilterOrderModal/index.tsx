import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import SelectField from "@/components/molecules/SelectField";
import { useAttendant } from "@/hooks/use-attendant";
import { statusValues } from "@/models/status.values";
import { IFilterOrderModalProps } from "./helpers/filter-order-modal-props";
import { FilterFieldsContainer, FilterOrderModalActionContainerStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { ITableQuery } from "@/store/helpers/table-query";
import { IOrder } from "@/models/order";
import { updateOrderQuery } from "@/store/table-queries";
import { useEffect } from "react";

const schema = yup.object().shape({
    isOpened: yup.boolean().notRequired().transform((value) => typeof value !== 'boolean' ? undefined : value).nullable(),
    attendantId: yup.number().notRequired().transform((value) => isNaN(value) ? undefined: Number(value)).nullable(),
    createdAt: yup.string().notRequired().nullable(),
})

export default function FilterOrderModal(props: IFilterOrderModalProps) {

    const orderFilter = useSelector<ReturnType<typeof store.getState>>(state => state.tableQueries.orders) as ITableQuery<Omit<IOrder, 'createdAt'> & {createdAt: string}>

    const dispatch = useDispatch()

    const {
        listLoading,
        attendants
    } = useAttendant()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm({ resolver: yupResolver(schema), defaultValues: {
        isOpened: undefined,
        attendantId: undefined,
        createdAt: undefined
    }})

    useEffect(() => {
        if(props.opened) {
            setValue('attendantId', orderFilter?.filter?.attendantId)
            setValue('isOpened', orderFilter?.filter?.isOpened)
            setValue('createdAt', orderFilter?.filter?.createdAt)
        }
    }, [props.opened, orderFilter, setValue])

    const dateOptions = [
        { name: 'Hoje', value: 'today'},
        { name: 'Desta semana', value: 'week'},
        { name: 'Deste mês', value: 'month'}
    ]

    function onSubmit(filter: Record<keyof IOrder, string>) {
        props.close()
        dispatch(updateOrderQuery({ filter }))
        setTimeout(reset, 200)
    }


    return <Modal opened={props.opened} close={props.close} title="Filtrar Lista de Pedidos" width="600px">
        <form onSubmit={handleSubmit(onSubmit)}>
            <FilterFieldsContainer>
                <SelectField 
                    id="order-status-filter" 
                    label="Status" 
                    items={statusValues} 
                    itemTitle="name" 
                    itemValue="value"
                    clearable
                    register={register('isOpened')}
                    errorMessage={errors.isOpened?.message}
                    isOptional
                    onClear={() => setValue('isOpened', undefined)}
                />
                <SelectField
                    id="order-attendant-filter"
                    label="Atendente"
                    items={attendants}
                    itemTitle="name"
                    itemValue="id"
                    loading={listLoading}
                    clearable
                    register={register('attendantId')}
                    errorMessage={errors.attendantId?.message}
                    isOptional
                    onClear={() => setValue('attendantId', undefined)}
                />
                <SelectField
                    id="order-date-filter"
                    label="Data de Criação"
                    items={dateOptions}
                    itemTitle="name"
                    itemValue="value"
                    clearable
                    register={register('createdAt')}
                    errorMessage={errors.createdAt?.message}
                    isOptional
                    onClear={() => setValue('createdAt', undefined)}
                />
            </FilterFieldsContainer>
            <FilterOrderModalActionContainerStyle>
                <Button text="Limpar Campos" model="terciary" type="reset"/>
                <Button text="Descartar Alterações" model="secondary"/>
                <Button text="Confirmar" model="primary" type="submit"/>
            </FilterOrderModalActionContainerStyle>
        </form>
    </Modal>
}