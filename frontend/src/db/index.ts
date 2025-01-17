import { Attendant } from "@/models/attendant";
import { ViewOrderModel } from "@/models/order";
import Dexie, { type EntityTable } from "dexie";

export const db = new Dexie('OrdersDatabase') as Dexie & {
    orders: EntityTable<ViewOrderModel, 'id'>,
    attendants: EntityTable<Attendant, 'id'>
}

db.version(1).stores({
    orders: '++id, name, createdAt, isOpened, attendantId',
    attendants: '++id, name'
})
