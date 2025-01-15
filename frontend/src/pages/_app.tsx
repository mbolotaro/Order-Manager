import type { AppProps } from "next/app";
import GlobalStyle from '../styles/GlobalStyle'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { loadAllStateStorage, store, StoreTypeHelper } from "@/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { StyleThemeNames } from "@/styles/helpers/style-theme-names";
import { ReactNode, useEffect, useState } from "react";
import { removeToast, ToastData } from "@/store/toast";
import Toast from "@/components/atoms/Toast";

function ThemeWrapper({ children } : { children: ReactNode}) {
  const currentTheme = useSelector<StoreTypeHelper>(state => state.theme) as StyleThemeNames
  const toasts = useSelector<StoreTypeHelper>(state => state.toast) as ToastData[]
  
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
    {
      toasts.map((toast, index) => 
        <Toast message={toast.message} styleType={toast.styleType} key={index} position={index} icon={toast.icon} onClose={() => dispatch(removeToast(toast.message))}/>
      )
    }
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
