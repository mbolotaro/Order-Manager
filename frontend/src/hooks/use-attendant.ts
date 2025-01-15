import { db } from "@/db"
import { IAttendant } from "@/models/attendant"
import { getAttendants } from "@/services/attendants"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react"

export function useAttendant() {
    const [listLoading, setListLoading] = useState(false)
    const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)

    const attendants = useLiveQuery(() => db.attendants.toArray()) ?? [] as IAttendant[];

    async function getAll() {
        setListLoading(true)
        try {
            if(!listLoading && !alreadyListLoaded) {
                await db.attendants.bulkPut(await getAttendants() ?? [])
            }
            return attendants
        } catch (error) {
            throw error
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