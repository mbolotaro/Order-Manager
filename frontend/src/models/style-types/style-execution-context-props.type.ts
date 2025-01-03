import { ExecutionContext } from "styled-components";
import { IStyleThemeConfig } from "./style-theme-config.interface";

export type styleExecutionContextProps = ExecutionContext & {
  theme?: IStyleThemeConfig;
};