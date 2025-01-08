import { Attendant } from "./attendant.interface";
import { TicketStatus } from "./enums/ticket-status.enum";

export interface ITicket {
    id: number;
    createdAt: Date;
    name: string;
    attendant?: Attendant;
    status: TicketStatus;
}