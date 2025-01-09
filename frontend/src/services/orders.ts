import { IOrder } from "@/models/order.interface";
import { BASE_URL } from "./api";

export async function createOrder(order: IOrder) {
    const data = ({...order, id: String(order.id)})

    return await fetch(`${BASE_URL}/orders`, { 
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json'}, 
        body: JSON.stringify(data)}
    )
}

export async function getOrders() {

}