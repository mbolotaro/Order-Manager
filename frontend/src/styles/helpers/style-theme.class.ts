import { IStyleThemeConfig } from "./style-theme-config.interface";
import { IStyleTheme } from "./style-theme.interface";

export class StyleTheme implements IStyleTheme {
    constructor({ base, light, dark }: IStyleTheme) {
        this.base = base
        this.light = light
        this.dark = dark
    }

    readonly base
    readonly light
    readonly dark

    getTheme(themeName: 'light' | 'dark'): IStyleThemeConfig {
        return {...this.base, ...this[themeName]}
    }
}