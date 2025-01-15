import { db } from "@/db"
import { Attendant } from "@/models/attendant"
import { getAttendants } from "@/services/attendants"
import { errorAlert } from "@/store/toast"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react"
import { useDispatch } from "react-redux"

export function useAttendant() {
    const [listLoading, setListLoading] = useState(false)
    const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)
    const attendants = useLiveQuery(() => db.attendants.toArray()) ?? [] as Attendant[];
    const dispatch = useDispatch()

    async function getAll() {
        setListLoading(true)
        try {
            throw new Error('Não foi pofssífvel obter atfendentes! ' + new Date().getTime())
/*             if(!listLoading && !alreadyListLoaded) {
                await db.attendants.bulkPut(await getAttendants() ?? [])
            }
            return attendants */
        } catch (error) {
            if(error instanceof Error) {
                dispatch(errorAlert(error.message))
            } else dispatch(errorAlert('Não foi possível obter atendentes!'))
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