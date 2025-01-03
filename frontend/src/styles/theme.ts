import { StyleTheme } from "@/models/style-types/style-theme.class";

export const theme = new StyleTheme({
  base: {
    fonts: {
      body: "'Arial'",
      heading: "Arial",
    },
    fontSizes: {
      small: "clamp(12px, 2vw, 16px)",
      normal: "clamp(14px, 3vw, 20px)",
      large: "clamp(18px, 4vw, 24px)",
      extraLarge: "clamp(24px, 5vw, 32px)",
    },
  },
  light: {
    colors: {
      primary: "#736CED",
      secondary: "#B7B5B3",
      background: "#E5E7E6",
      card: "#E5E7E6",
      text: "#0F1319",
      error: "#E84855",
    },
  },
  dark: {
    colors: {
      primary: "#736CED",
      secondary: "#B7B5B3",
      background: "#101828",
      card: "#0F1319",
      text: "#E5E7E6",
      error: "#E84855",
    },
  },
});