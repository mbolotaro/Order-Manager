import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import SelectField from "@/components/molecules/SelectField";
import { useAttendant } from "@/hooks/use-attendant";
import { FilterOrderModalProps } from "./helpers/filter-order-modal-props";
import { FilterFieldsContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FilterByCreatedAtValues, FilterOrderModel } from "@/models/order";
import { updateOrderQuery } from "@/store/table-queries";
import { filterOrderSchema } from "@/validations/orders/validate-filter-order";
import { OrderQueries } from "@/store/helpers/table-queries-data";
import Row from "@/components/atoms/Row";

const statusValues = [
  {
    name: "🟢 Aberto",
    value: true,
  },
  {
    name: "🔴 Fechado",
    value: false,
  },
];

export default function FilterOrderModal(props: FilterOrderModalProps) {

    const orderFilter = useSelector<ReturnType<typeof store.getState>>(state => state.tableQueries.orders) as OrderQueries

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
    } = useForm({ resolver: yupResolver(filterOrderSchema), defaultValues: {
        isOpened: undefined,
        attendantId: undefined,
        createdAt: undefined
    }})


    const dateOptions: { name: string, value: FilterByCreatedAtValues}[] = [
        { name: 'Hoje', value: FilterByCreatedAtValues.Today},
        { name: 'Desta semana', value: FilterByCreatedAtValues.Week},
        { name: 'Deste mês', value: FilterByCreatedAtValues.Month}
    ]

    function onSubmit(filter: FilterOrderModel) {
        props.close()
        dispatch(updateOrderQuery({ filter }))
    }

    function revertChanges() {
        setValue('attendantId', orderFilter.filter.attendantId)
        setValue('createdAt', orderFilter.filter.createdAt)
        setValue('isOpened', orderFilter.filter.isOpened)
    }

    function resetFields() {
        setValue('attendantId', undefined)
        setValue('createdAt', undefined)
        setValue('isOpened', undefined)

        dispatch(updateOrderQuery({ filter: {
            attendantId: undefined,
            createdAt: undefined,
            isOpened: undefined
        }}))
    }


    return <Modal opened={props.opened} close={props.close} title="Filtrar Lista de Pedidos" $width="600px">
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
            <Row $justify="center" $padding={{ top: '24px' }} $gap="8px">
                <Button text="Limpar Campos" model="terciary" onClick={resetFields}/>
                <Button text="Descartar Alterações" onClick={revertChanges} model="secondary"/>
                <Button text="Confirmar" model="primary" type="submit"/>
            </Row>
        </form>
    </Modal>
}