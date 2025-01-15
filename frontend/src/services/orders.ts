import { CreateOrderModel, UpdateOrderModel, ViewOrderModel } from "@/models/order";
import { api } from "./api";
import { Attendant } from "@/models/attendant";

export async function createOrder(order: CreateOrderModel) {
    return await api('POST', 'orders', order)
}

export async function getOrders(): Promise<ViewOrderModel[]> {
    const params = new URLSearchParams({
        select: "id, name, createdAt, attendants(id, name), attendantId, isOpened",
    });
    return await (await (await api('GET', `orders?${params}`)).json()).map((order: ViewOrderModel & {attendants: Attendant, createdAt: number}) => ({...order, attendants: undefined, attendant: order.attendants, createdAt: new Date(order.createdAt)})) as ViewOrderModel[] ?? []
}

export async function updateOrder(id: number, updateOrderModel: UpdateOrderModel) {
    return await api('PATCH', `orders?id=eq.${id}`, updateOrderModel)
}

export async function deleteOrders(ordersId: number[]) {
    const params = new URLSearchParams();

    params.append('id', `in.(${ordersId.join(',')})`)

    return await api('DELETE', `orders?${params}`)
}