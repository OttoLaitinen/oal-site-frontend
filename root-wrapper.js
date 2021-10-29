import React from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyle } from "./src/styles/theme"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
