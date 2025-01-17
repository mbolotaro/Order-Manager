import { StyleThemeConfig } from "./style-theme-config";

export class StyleTheme {
  constructor({ base, light, dark }: Omit<StyleTheme, 'getTheme'>) {
    this.base = base;
    this.light = light;
    this.dark = dark;
  }

  readonly base: Partial<StyleThemeConfig>;
  readonly light?: Partial<StyleThemeConfig>;
  readonly dark?: Partial<StyleThemeConfig>;

  getTheme(themeName: "light" | "dark"): StyleThemeConfig {
    return { ...this.base, ...this[themeName] } as StyleThemeConfig;
  }
}