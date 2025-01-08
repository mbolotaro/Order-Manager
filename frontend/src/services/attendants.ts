import { IAttendant } from "@/models/attendant.interface";

export async function getAttendants() : Promise<IAttendant[]> {
  try {
    const response = await (fetch('https://677ee15b94bde1c1252ddf45.mockapi.io/orders/attendants'))
    const data: (IAttendant & {id: string})[] = await response.json()
    
    return data.map(item => ({...item, id: Number(item.id)}))
  } catch (error) {
    throw error; 
  }
}