import { StyleColorTypes } from "./style-color-types";
import { StyleThemeNames } from "./style-theme-names";

export interface StyleThemeConfig {
  name: StyleThemeNames;
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