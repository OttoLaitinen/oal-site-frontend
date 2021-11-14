import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import TopBar from "./TopBar"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LayoutGrid>
        <TopWrapper>
          <TopBar />
        </TopWrapper>

        <ContentWrapper>{children}</ContentWrapper>

        <FooterWrapper>© {new Date().getFullYear()}</FooterWrapper>
      </LayoutGrid>
    </>
  )
}

const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: [top-start] 8rem [content-start] 1fr [footer-start] 8rem [footer-end];
  min-height: 100vh;
`
const TopWrapper = styled.header`
  grid-row-start: top-start;
  grid-row-end: content-start;
  display: grid;
`

const ContentWrapper = styled.main`
  grid-row-start: content-start;
  grid-row-end: footer-start;
`

const FooterWrapper = styled.footer`
  grid-row-start: footer-start;
  grid-row-end: footer-end;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
