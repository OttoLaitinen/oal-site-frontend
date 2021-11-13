import { createGlobalStyle, CSSObject } from "styled-components"
import reset from "styled-reset"

const fontNames = {
  regular: "Karla",
  title: "Quicksand",
}

const theme = {
  color: {
    primary: "#9C2F2F",
    primaryLight: "#FFEBEB",
    primaryLightest: "#FFF5F5",
    white: "white",
    black: "black",
  },
  fonts: {
    regular: fontNames.regular,
    title: fontNames.title,
  },
  typography: {
    title1: {
      fontFamily: fontNames.title,
      fontSize: "3rem",
      fontWeight: 700,
    } as CSSObject,
    title2: {
      fontFamily: fontNames.title,
      fontSize: "2rem",
      fontWeight: 700,
    } as CSSObject,
    title3: {
      fontFamily: fontNames.title,
      fontSize: "1.5rem",
      fontWeight: 700,
    } as CSSObject,
    subtitle: {
      fontFamily: fontNames.title,
      fontSize: "1rem",
      fontWeight: 700,
    } as CSSObject,
    body: {
      fontFamily: fontNames.regular,
      fontSize: "1.125rem",
      fontWeight: 400,
    } as CSSObject,
    bodyLarge: {
      fontFamily: fontNames.regular,
      fontSize: "1.25rem",
      fontWeight: 400,
    } as CSSObject,
    bodySmall: {
      fontFamily: fontNames.regular,
      fontSize: "1rem",
      fontWeight: 400,
    } as CSSObject,
    overline: {
      fontFamily: fontNames.regular,
      fontSize: "0.75rem",
      textTransform: "uppercase",
      fontWeight: 500,
      letterSpacing: 0.8,
    } as CSSObject,
    caption: {
      fontFamily: fontNames.regular,
      fontSize: "0.75rem",
      fontWeight: 400,
    } as CSSObject,
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
    color: ${theme.color.black};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${theme.color.primaryLightest};
    ${theme.typography.body}
  }
  h1 {
    ${theme.typography.title1}
  }
`
export type Theme = typeof theme
export type Typography = keyof Theme["typography"]

export default theme
