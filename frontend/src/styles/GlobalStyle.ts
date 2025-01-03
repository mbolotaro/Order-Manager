import { styleExecutionContextProps } from "@/models/style-types/style-execution-context-props.type";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background: ${(props: styleExecutionContextProps) => props.theme.colors?.background};
  color: ${(props: styleExecutionContextProps) => props.theme.colors?.text};
  font-family: ${(props: styleExecutionContextProps) => props.theme.fonts?.body};
  font-size: ${(props: styleExecutionContextProps) => props.theme.fontSizes?.normal}
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

`;