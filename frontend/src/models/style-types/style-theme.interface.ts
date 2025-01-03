import { IStyleThemeConfig } from "./style-theme-config.interface";

export interface IStyleTheme {
  readonly base: IStyleThemeConfig;
  readonly light?: Partial<IStyleThemeConfig>;
  readonly dark?: Partial<IStyleThemeConfig>;
}