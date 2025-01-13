import { styleThemeNames } from "@/styles/helpers/style-theme-names.type";

export interface IThemeContextData {
    theme: styleThemeNames;
    toggleTheme: () => void;
}