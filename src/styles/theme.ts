import { createGlobalStyle, CSSObject } from "styled-components"
import reset from "styled-reset"

const fontNames = {
  regular: "Karla",
  title: "Quicksand",
}

const theme = {
  constants: {
    borderRadius: "1rem",
    contentMaxWidth: "min(70rem, 90vw)",
    topBarHeight: "4rem",
  },
  borderRadius: "1rem",
  contentMaxWidth: "70rem",

  color: {
    primary: "#20306A",
    primaryLight: "#E6EBFF",
    primaryLightest: "#FAFBFF",
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
    height: 100%;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${theme.color.primaryLightest};
    ${theme.typography.body}

    min-height: 100%;
    padding: 0;
  }
  h1 {
    ${theme.typography.title1}
  }
  h2 {
    ${theme.typography.title2}
  }
  h3 {
    ${theme.typography.title3}
  }
  h4 {
    ${theme.typography.subtitle}
  }
  p {
    :not(:last-child) {
      margin-bottom: ${theme.spacing.small}
     }
  }
`
export type Theme = typeof theme
export type Typography = keyof Theme["typography"]

export default theme
