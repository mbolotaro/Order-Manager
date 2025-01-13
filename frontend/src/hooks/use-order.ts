import { db } from "@/db";
import { CreateOrderModel, IOrder, ViewOrderModel } from "@/models/order.interface"
import { createOrder, deleteOrders, getOrders, updateOrder } from "@/services/orders";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import * as yup from 'yup'

export const MAX_NAME_LENGTH = 50
export const MIN_NAME_LENGTH = 5

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome deve ser definido!")
    .min(
      MIN_NAME_LENGTH,
      `Nome deve ter no mínimo ${MIN_NAME_LENGTH} carácteres!`
    )
    .max(
      MAX_NAME_LENGTH,
      `Nome deve ter no máximo ${MAX_NAME_LENGTH} carácteres!`
    ),
  isOpened: yup
    .boolean()
    .transform((value) => (value === "true" ? true : false))
    .required("Status é obrigatório!"),
  attendantId: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .when(['isOpened'], {
      is: (value: boolean) => value === false,
      then: (schema) => schema.required('É obrigatório que haja um atendente em um pedido fechado!'),
      otherwise: (schema) => schema.notRequired()
    })
});

export function useOrder() {
  const [loading, setLoading] = useState(false)
  const [alreadyLoaded] = useState(false)
  const [listLoading, setListLoading] = useState(false)
  const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)
  
  const orders: (ViewOrderModel)[] = useLiveQuery(() => db.orders?.toArray()) ?? [] as ViewOrderModel[];

  async function create(createOrderModel: CreateOrderModel) {
    setLoading(true)

    try {
      await createOrder(createOrderModel)
      await getAll()
    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }

  async function getAll() {
    setListLoading(true)

    try {
      if(!listLoading) {
        await db.orders.clear()
        await db.orders.bulkAdd((await getOrders()))
      }
    } catch (error) {
      throw error;        
    } finally {
      setListLoading(false)
      setAlreadyListLoaded(false)
    }
  }

  async function update(updateOrderModel: IOrder) {
    setLoading(true)

    try {
      await updateOrder(updateOrderModel)
    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }
  
  async function removeMany(ordersId: number[]){
    setLoading(true)

    try {
      await deleteOrders(ordersId)
      await getAll()
    } catch (error) {
      throw error;
    } finally {
      setLoading(false)
    }
  }

  return {
      MAX_NAME_LENGTH, 
      MIN_NAME_LENGTH,
      schema,

      create,
      getAll,
      update,
      removeMany,

      loading,
      alreadyLoaded,
      listLoading,
      alreadyListLoaded,
      orders
  }
}