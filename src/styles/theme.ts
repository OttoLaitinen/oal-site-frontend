import { Global, css } from "@emotion/react"
import emotionReset from "emotion-reset"

const rem = (pixels: number) => `${pixels / 16}rem`

const fontNames = {
  regular: "Karla",
  title: "Quicksand",
}

const breakpoints = {
  phone: 767,
  tablet: 1023,
  desktop: 1800,
}

const media = {
  phone: `@media (max-width: ${rem(breakpoints.phone)})`,
  tabletDown: `@media (max-width: ${rem(breakpoints.tablet)})`,
  desktopDown: `@media (max-width: ${rem(breakpoints.desktop)})`,
}

const theme = {
  rem,
  media,
  breakpoints,
  constants: {
    borderRadius: "1rem",
    contentMaxWidth: "64rem",
    topBarHeight: "4rem",
    textContentWidth: "70ch",
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
    regular: "Karla",
    title: "Quicksand",
  },
  typography: {
    title1: css`
      font-family: "Quicksand";
      font-size: 3rem;
      font-weight: 700;

      ${media.tabletDown} {
        font-size: min(2rem, 8vw);
      }
    `,
    title2: css`
      font-family: "Quicksand";
      font-size: 2rem;
      font-weight: 700;
    `,
    title3: css`
      font-family: "Quicksand";
      font-size: 1.5rem;
      font-weight: 500;

      ${media.phone} {
        font-size: 1.25rem;
      }
    `,
    subtitle: css`
      font-family: "Quicksand";
      font-size: 1.125rem;
      font-weight: 500;
    `,
    body: css`
      font-family: "Karla";
      font-size: 1.125rem;
      font-weight: 400;
    `,
    bodyLarge: css`
      font-family: "Karla";
      font-size: 1.25rem;
      font-weight: 400;
    `,
    bodySmall: css`
      font-family: "Karla";
      font-size: 1rem;
      font-weight: 400;
    `,
    bodyTiny: css`
      font-family: "Karla";
      font-size: 0.625rem;
      font-weight: 400;
    `,
    caption: css`
      font-family: "Karla";
      font-size: 1rem;
      font-weight: 400;
    `,
  },
  spacing: {
    verySmall: "0.25rem",
    small: "0.5rem",
    regular: "1rem",
    large: "2rem",
    veryLarge: "4rem",
  },
}

export const GlobalStyle = css`
  ${emotionReset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${theme.color.black};
    height: 100%;
  }
  body {
    line-height: 1.75;
    letter-spacing: 0;
    background-color: ${theme.color.primaryLightest};
    ${theme.typography.body};

    min-height: 100%;
  }

  h1 {
    ${theme.typography.title1};
  }
  h2 {
    ${theme.typography.title2};
  }
  h3 {
    ${theme.typography.title3};
  }
  h4 {
    ${theme.typography.subtitle};
  }
`
export type Theme = typeof theme
export type Typography = keyof Theme["typography"]
export type Breakpoint = keyof Theme["media"]

export default theme
