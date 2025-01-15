import { IAttendant } from "@/models/attendant";
import { api } from "./api";

export async function getAttendants() : Promise<IAttendant[]> {
  try {
    return await (await api('GET', `attendants`)).json() ?? [] 
  } catch (error) {
    throw error; 
  }
}