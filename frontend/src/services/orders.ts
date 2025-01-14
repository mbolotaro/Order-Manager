import { CreateOrderModel, IOrder, ViewOrderModel } from "@/models/order.interface";
import { api } from "./api";
import { IAttendant } from "@/models/attendant.interface";

export async function createOrder(order: CreateOrderModel) {
    return await api('POST', 'orders', order)
}

export async function getOrders(): Promise<ViewOrderModel[]> {
    const params = new URLSearchParams({
        select: "id, name, createdAt, attendants(id, name), attendantId, isOpened",
    });
    return await (await (await api('GET', `orders?${params}`)).json()).map((order: ViewOrderModel & {attendants: IAttendant, createdAt: number}) => ({...order, attendants: undefined, attendant: order.attendants, createdAt: new Date(order.createdAt)})) as ViewOrderModel[] ?? []
}

export async function updateOrder(updateOrderModel: IOrder) {
    return await api('PATCH', `orders?id=eq.${updateOrderModel.id}`, updateOrderModel)
}

export async function deleteOrders(ordersId: number[]) {
    const params = new URLSearchParams();

    params.append('id', `in.(${ordersId.join(',')})`)

    return await api('DELETE', `orders?${params}`)
}