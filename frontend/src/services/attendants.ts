import { IAttendant } from "@/models/attendant.interface";
import { BASE_URL } from "./api";

export async function getAttendants() : Promise<IAttendant[]> {
  try {
    const response = await (fetch(`${BASE_URL}/attendants`))
    const data: IAttendant[] = await response.json()
    
    return data
  } catch (error) {
    throw error; 
  }
}