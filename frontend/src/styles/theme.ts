import { StyleTheme } from "@/styles/helpers/style-theme.class";

export const theme = new StyleTheme({
  base: {
    fonts: {
      body: "'OpenSans'",
      heading: "'OpenSans'",
    },
    fontSizes: {
      small: "clamp(10px, 1.5vw, 12px)",
      normal: "clamp(12px, 2vw, 14px)",
      large: "clamp(14px, 3vw, 20px)",
      extraLarge: "clamp(24px, 4vw, 32px)",
    },
  },
  light: {
    colors: {
      primary: "#736CED",
      secondary: "#B7B5B3",
      background: "#E5E7E6",
      card: "#E5E7E6",
      text: "#0F1319",
      danger: "#E84855",
      grey: "#A7B6CC",
      dark: "#0F1319",
      light: "#E5E7E6",
    },
  },
  dark: {
    colors: {
      primary: "#736CED",
      secondary: "#B7B5B3",
      background: "#191C29",
      card: "#0F1319",
      text: "#E5E7E6",
      danger: "#E84855",
      grey: "#A7B6CC",
      dark: "#0F1319",
      light: "#E5E7E6",
    },
  },
});