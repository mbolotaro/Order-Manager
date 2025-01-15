import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { ToggleThemeButtonStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { type store } from '@/store'
import { toggleTheme } from '@/store/theme-slice'
import { StyleThemeNames } from "@/styles/helpers/style-theme-names";

export default function ToggleThemeButton() {
  const theme = useSelector<ReturnType<typeof store.getState>>(state => state.theme) as StyleThemeNames;
  const dispatch = useDispatch()

  return <ToggleThemeButtonStyle onClick={() => dispatch(toggleTheme())}>
    { theme === 'light' ? <MoonIcon size={30} styleType="primary"/> : <SunIcon size={30} styleType="primary"/>}
  </ToggleThemeButtonStyle>
}