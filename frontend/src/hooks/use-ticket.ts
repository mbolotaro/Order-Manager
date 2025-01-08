import { CreateTicketModel } from "@/models/ticket.interface"
import { useState } from "react";
import * as yup from 'yup'

export const MAX_NAME_LENGTH = 50
export const MIN_NAME_LENGTH = 5

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome deve ser definido!")
    .min(MIN_NAME_LENGTH, `Nome deve ter no mínimo ${MIN_NAME_LENGTH} carácteres!`)
    .max(MAX_NAME_LENGTH, `Nome deve ter no máximo ${MAX_NAME_LENGTH} carácteres!`),
  status: yup.string().required("Status é obrigatório!"),
  attendant: yup.number(),
});

export function useTicket() {
    const [loading, setLoading] = useState(false)
    const [alreadyLoaded, setAlreadyLoaded] = useState(false)
    const [listLoading, setListLoading] = useState(false)
    const [alreadyListLoaded, setAlreadyListLoaded] = useState(false)

    async function create(createTicketModel: CreateTicketModel) {
        setLoading(true)
    }

    async function getAll() {
        return []
    }

    async function update() {

    }
    
    async function remove(){

    }

    return {
        MAX_NAME_LENGTH, 
        MIN_NAME_LENGTH,
        schema,

        create,
        getAll,
        update,
        remove,

        loading,
        setLoading,

        alreadyLoaded,
        setAlreadyLoaded,

        listLoading,
        setListLoading,

        alreadyListLoaded,
        setAlreadyListLoaded

    }
}