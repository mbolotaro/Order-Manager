import { IAttendant } from "@/models/attendant.interface";
import { ViewOrderModel } from "@/models/order.interface";
import Dexie, { type EntityTable } from "dexie";

export const db = new Dexie('OrdersDatabase') as Dexie & {
    orders: EntityTable<ViewOrderModel, 'id'>,
    attendants: EntityTable<IAttendant, 'id'>
}

db.version(1).stores({
    orders: '++id, name, createdAt, isOpened, attendantId',
    attendants: '++id, name'
})
