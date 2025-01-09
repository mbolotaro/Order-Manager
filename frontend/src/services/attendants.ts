import { IAttendant } from "@/models/attendant.interface";
import { BASE_URL } from "./api";

export async function getAttendants() : Promise<IAttendant[]> {
  try {
    const response = await (fetch(`${BASE_URL}/attendants`))
    const data: (IAttendant & {id: string})[] = await response.json()
    
    return data.map(item => ({...item, id: Number(item.id)}))
  } catch (error) {
    throw error; 
  }
}