import { TicketStatus } from "./enums/ticket-status.enum";

export interface ITicket {
    id: number;
    createdAt: Date;
    name: string;
    attendantId?: number;
    status: TicketStatus;
}

export type CreateTicketModel = Omit<ITicket, 'id' | 'createdAt'>