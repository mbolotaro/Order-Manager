import { styleThemeNames } from "@/styles/helpers/style-theme-names";
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light' as styleThemeNames,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state == 'light' ? 'dark' : 'light'

            if(typeof window !== 'undefined') {
                localStorage.setItem('theme', newTheme)
            }
            return newTheme
        },

        loadStorage: () => {
            if(typeof window !== undefined) {
                const savedTheme = localStorage.getItem('theme') as styleThemeNames

                if(!savedTheme) {
                    localStorage.setItem('theme', 'light')
                }
                return savedTheme ?? 'light'
            } else return 'light'
        },
    },
})

export const { toggleTheme, loadStorage } = themeSlice.actions
export default themeSlice.reducer