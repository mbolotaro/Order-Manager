import { styleColorTypes } from "./style-color-types";

export interface IStyleThemeConfig {
  
  colors: Record<styleColorTypes, string>;
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