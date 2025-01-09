import { IOrder } from "@/models/order.interface";
import { BASE_URL } from "./api";

export async function createOrder(order: IOrder) {
    const data = {...order, createdAt: new Date().getTime(), id: '16541654'}
    return await fetch(`${BASE_URL}/orders`, { 
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json'}, 
        body: JSON.stringify(data)}
    )
}

export async function getOrders() {
    const response = await fetch(`${BASE_URL}/orders`)
    const data: IOrder[] = await response.json()

    return data
}