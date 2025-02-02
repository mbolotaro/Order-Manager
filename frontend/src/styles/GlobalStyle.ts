import { StyleExecutionContextProps } from "@/styles/helpers/style-execution-context-props";
import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

export default createGlobalStyle`
${fonts}

html,
body {
  width: 100vw;
  overflow-x: hidden;
  background: ${(props: StyleExecutionContextProps) =>
    props.theme.colors?.background};
  color: ${(props: StyleExecutionContextProps) => props.theme.colors?.text};
  font-family: ${(props: StyleExecutionContextProps) =>
    props.theme.fonts?.body};
  font-size: ${(props: StyleExecutionContextProps) =>
    props.theme.fontSizes?.normal};
  overflow: hidden;
  min-height: 100vh;
  position: relative !important;
  
}

html {
  overflow-y: scroll;
}

* {
  box-sizing: border-box;
  padding: 0;
  transition: color 0.1s;
  margin: 0;
  font-family: ${(props: StyleExecutionContextProps) =>
    props.theme.fonts?.body};

}

a {
  color: inherit;
  text-decoration: none;
}

`;