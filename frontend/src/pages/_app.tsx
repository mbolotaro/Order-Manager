import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from "@/styles/theme";
import { useUserTheme } from "@/hooks/use-user-theme";

export default function App({ Component, pageProps }: AppProps) {
  const userTheme = useUserTheme()
  return (
  <ThemeProvider theme={theme.getTheme(userTheme?.theme ?? 'light')}>
    <GlobalStyle/>
    <Component {...pageProps} />
  </ThemeProvider>
  );
}
