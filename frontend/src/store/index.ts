import { configureStore } from '@reduxjs/toolkit'
import themeSliceReducer, { loadStorage as loadThemeSliceStorage } from './theme-slice'
import tableQueriesSliceReducer, { loadStorage as loadTableQueriesSliceStorage } from './table-queries'

export const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        tableQueries: tableQueriesSliceReducer
    },
})

export function loadAllStateStorage() {
    store.dispatch(loadThemeSliceStorage())
    store.dispatch(loadTableQueriesSliceStorage());
}