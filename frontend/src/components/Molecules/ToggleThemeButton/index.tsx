import Moon from "@/assets/icons/Moon";
import Sun from "@/assets/icons/Sun";
import { useTheme } from "@/contexts/Theme";
import { ToggleThemeButtonStyle } from "./style";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme()
  return <ToggleThemeButtonStyle onClick={() => toggleTheme()}>
    { theme === 'light' ? <Moon size={30} styleType="primary"/> : <Sun size={30} styleType="primary"/>}
  </ToggleThemeButtonStyle>
}