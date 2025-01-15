import { ExecutionContext } from "styled-components";
import { IStyleThemeConfig } from "./style-theme-config";

export type styleExecutionContextProps = ExecutionContext & {
  theme?: IStyleThemeConfig;
};