import { createSlice } from "@reduxjs/toolkit";
import { ITableQueriesData } from "./helpers/table-queries-data.interface";

const initialTableQueries: ITableQueriesData = {
    orders: {
        filter: {},
        order: {
            by: 'createdAt',
            asc: true
        },
        pagination: {
            limit: 10,
            skip: 0
        }
    }
}

const tableQueriesSlice = createSlice({
    name: 'table-queries',
    initialState: initialTableQueries as ITableQueriesData,
    reducers: {
        loadStorage: () => {
            if(typeof window !== undefined) {
                const savedTheme = localStorage.getItem('table-queries')

                if(!savedTheme) {
                    localStorage.setItem('table-queries', JSON.stringify(initialTableQueries))
                }
                return savedTheme ? JSON.parse(savedTheme) : initialTableQueries
            } else return initialTableQueries
        }
    }
})

export const { loadStorage } = tableQueriesSlice.actions
export default tableQueriesSlice.reducer;