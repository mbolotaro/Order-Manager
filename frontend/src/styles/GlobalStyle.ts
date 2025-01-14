import { styleExecutionContextProps } from "@/styles/helpers/style-execution-context-props.type";
import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

export default createGlobalStyle`
${fonts}

html,
body {
  width: 100vw;
  overflow-x: hidden;
  background: ${(props: styleExecutionContextProps) => props.theme.colors?.background};
  color: ${(props: styleExecutionContextProps) => props.theme.colors?.text};
  font-family: ${(props: styleExecutionContextProps) => props.theme.fonts?.body};
  font-size: ${(props: styleExecutionContextProps) => props.theme.fontSizes?.normal};
  height: 100%;
  min-height: 100vh;
  position: relative !important;
}

* {
  box-sizing: border-box;
  padding: 0;
  transition: 0.1s;
  margin: 0;
  font-family: ${(props: styleExecutionContextProps) => props.theme.fonts?.body};

}

a {
  color: inherit;
  text-decoration: none;
}

`;