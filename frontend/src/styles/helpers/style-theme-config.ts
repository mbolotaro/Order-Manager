import { StyleColorTypes } from "./style-color-types";

export interface StyleThemeConfig {
  
  colors: Record<StyleColorTypes, string>;
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