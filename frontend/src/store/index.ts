import { configureStore } from '@reduxjs/toolkit'
import themeSliceReducer, { loadStorage as loadThemeSliceStorage } from './theme'
import tableQueriesSliceReducer, { loadStorage as loadTableQueriesSliceStorage } from './table-queries'
import toastSliceReducer from './toast'

export const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        tableQueries: tableQueriesSliceReducer,
        toast: toastSliceReducer
    },
})

export function loadAllStateStorage() {
    store.dispatch(loadThemeSliceStorage())
    store.dispatch(loadTableQueriesSliceStorage());
}

export type StoreTypeHelper = ReturnType<typeof store.getState>