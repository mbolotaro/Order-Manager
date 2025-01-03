export interface IStyleThemeConfig {
  colors?: {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    error: string;
  };
  fonts?: {
    body: string;
    heading: string;
  };
  fontSizes?: {
    small: string;
    normal: string;
    large: string;
    extraLarge: string;
  };
}