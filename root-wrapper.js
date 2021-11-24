import React from "react"
import { ThemeProvider, Global } from "@emotion/react"
import theme, { GlobalStyle } from "./src/styles/theme"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
