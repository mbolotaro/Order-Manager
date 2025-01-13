import { createContext, useContext, useEffect, useState } from "react";
import { IThemeContextData } from "./helpers/theme-context-data.interface";
import { styleThemeNames } from "@/styles/helpers/style-theme-names.type";
import { ICustomThemeProviderProps } from "./helpers/custom-theme-provider-props.interface";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const ThemeContext = createContext<IThemeContextData | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export function CustomThemeProvider(props: ICustomThemeProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<styleThemeNames>('light')
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        if(!mounted) {
            const savedTheme = localStorage.getItem('theme')
            setCurrentTheme((savedTheme ?? 'light') as styleThemeNames)
            setMounted(true)
        }
    }, [mounted])

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme; 
        })
    }

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <ThemeProvider theme={theme.getTheme(currentTheme)}>
                { props.children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}