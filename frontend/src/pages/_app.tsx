import type { AppProps } from "next/app";
import GlobalStyle from '../styles/GlobalStyle'
import { CustomThemeProvider } from "@/contexts/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}
