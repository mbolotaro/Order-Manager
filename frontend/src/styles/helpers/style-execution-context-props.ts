import { ExecutionContext } from "styled-components";
import { StyleThemeConfig } from "./style-theme-config";

export type StyleExecutionContextProps = ExecutionContext & {
  theme?: StyleThemeConfig;
};