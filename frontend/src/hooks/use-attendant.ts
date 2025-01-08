import { IAttendant } from "@/models/attendant.interface"
import { getAttendants } from "@/services/attendants"
import { useState } from "react"

export function useAttendant() {
    const [listLoading, setListLoading] = useState(false)
    const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)

    const [attendants, setAttendants] = useState<IAttendant[]>([])

    async function getAll() {
        setListLoading(true)
        try {
            setAttendants(await getAttendants())
            
        } catch (error) {
            console.log(error)
        } finally {
            setListLoading(false)
            setAlreadyListLoaded(true)
        }
    }

    return {
        attendants,
        listLoading,
        alreadyListLoaded, 
        getAll 
    }
}