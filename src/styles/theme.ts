import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const theme = {
  color: {
    primary: "#9C2F2F",
    primaryLight: "#FFEBEB",
    primaryLightest: "#FFF5F5",
    white: "white",
    black: "black",
  },
  fonts: {
    regular: "Karla",
    title: "Rubik",
  },
  spacing: {
    verySmall: "0.25rem",
    small: "0.5rem",
    regular: "1rem",
    large: "2rem",
    veryLarge: "4rem",
  },
  size: {
    textContentWidth: "57ch",
  },
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
    font-size: 1rem;
    color: ${theme.color.black};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${theme.color.primaryLightest};
  }
`
export type Theme = typeof theme
export default theme
