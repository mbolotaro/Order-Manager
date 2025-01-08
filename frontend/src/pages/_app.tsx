import type { AppProps } from "next/app";
import { ThemeContext, ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from "@/styles/theme";
import { useUserTheme } from "@/hooks/use-user-theme";
import { useEffect, useMemo } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const userTheme = useUserTheme()
  const currentTheme = useMemo(() => theme.getTheme('dark'), [userTheme])


  return (
    <ThemeContext.Provider value={{theme: userTheme.theme, toggleTheme: userTheme.setUserPreferedTheme}}>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}
