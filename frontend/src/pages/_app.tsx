import type { AppProps } from "next/app";
import GlobalStyle from '../styles/GlobalStyle'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { loadAllStateStorage, store } from "@/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { styleThemeNames } from "@/styles/helpers/style-theme-names.type";
import { ReactNode, useEffect, useState } from "react";

function ThemeWrapper({ children } : { children: ReactNode}) {
  const currentTheme = useSelector<ReturnType<typeof store.getState>>(state => state.theme) as styleThemeNames
  const [mounted, setMounted] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!mounted) {
      loadAllStateStorage()
      setMounted(true)
    }
  }, [mounted, dispatch])

  return <ThemeProvider theme={theme.getTheme(currentTheme)}>
    { children }
  </ThemeProvider>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  )
}
