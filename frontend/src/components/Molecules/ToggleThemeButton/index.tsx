import Moon from "@/assets/icons/Moon";
import Sun from "@/assets/icons/Sun";
import { ToggleThemeButtonStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { type store } from '@/store'
import { toggleTheme } from '@/store/theme-slice'
import { styleThemeNames } from "@/styles/helpers/style-theme-names.type";

export default function ToggleThemeButton() {
  const theme = useSelector<ReturnType<typeof store.getState>>(state => state.theme) as styleThemeNames;
  const dispatch = useDispatch()

  return <ToggleThemeButtonStyle onClick={() => dispatch(toggleTheme())}>
    { theme === 'light' ? <Moon size={30} styleType="primary"/> : <Sun size={30} styleType="primary"/>}
  </ToggleThemeButtonStyle>
}