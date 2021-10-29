import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const theme = {
  primery: "#9C2F2F",
  primaryLight: "#FFEBEB",
  primaryLightest: "#FFF5F5",
  white: "white",
  black: "black",
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: ${theme.black};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${theme.primaryLightest};
  }
`

export default theme
