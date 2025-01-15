import { createSlice } from "@reduxjs/toolkit";
import { ITableQueriesData } from "./helpers/table-queries-data";

const initialTableQueries: ITableQueriesData = {
    orders: {
        filter: {},
        order: {
            by: 'createdAt',
            asc: true
        },
        limit: 10
    }
}

const tableQueriesSlice = createSlice({
    name: 'table-queries',
    initialState: initialTableQueries as ITableQueriesData,
    reducers: {
        loadStorage: () => {
            if(typeof window !== undefined) {
                const savedTableQuery = localStorage.getItem('table-queries')
                console.log(savedTableQuery)
                if(!savedTableQuery) {
                    localStorage.setItem('table-queries', JSON.stringify(initialTableQueries))
                }
                return savedTableQuery ? JSON.parse(savedTableQuery) : initialTableQueries
            } else return initialTableQueries
        },

        updateOrderQuery: (state, changes) => {
            if(typeof window !== undefined) {
                console.log(changes.payload)
                state.orders = {...state.orders, ...changes.payload}
                localStorage.setItem('table-queries', JSON.stringify(state))
            }
        }
    }
})

export const { loadStorage, updateOrderQuery } = tableQueriesSlice.actions
export default tableQueriesSlice.reducer;