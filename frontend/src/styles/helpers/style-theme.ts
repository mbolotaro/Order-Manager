import { IStyleThemeConfig } from "./style-theme-config";

export class StyleTheme {
  constructor({ base, light, dark }: StyleTheme) {
    this.base = base;
    this.light = light;
    this.dark = dark;
  }

  readonly base: Partial<IStyleThemeConfig>;
  readonly light?: Partial<IStyleThemeConfig>;
  readonly dark?: Partial<IStyleThemeConfig>;

  getTheme(themeName: "light" | "dark"): IStyleThemeConfig {
    return { ...this.base, ...this[themeName] } as IStyleThemeConfig;
  }
}