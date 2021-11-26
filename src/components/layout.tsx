import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import styled from "@emotion/styled"
import TopBar from "./TopBar"
import { ImageDataLike } from "gatsby-plugin-image"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => {
  const data: LayoutProps = useStaticQuery(graphql`
    query LayoutQuery {
      strapiGlobal {
        contactEmail
        siteName
        siteLanguage
        socialNetworks {
          url
          title
        }
      }
    }
  `)

  return (
    <>
      <TopBar />

      <LayoutGrid>
        <ContentWrapper>{children}</ContentWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </LayoutGrid>
    </>
  )
}

const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: [content-start] 1fr [footer-start] 8rem [footer-end];
  grid-template-areas:
    "content"
    "footer";

  min-height: calc(100vh - ${props => props.theme.constants.topBarHeight});
`

const ContentWrapper = styled.main`
  grid-area: content;
  margin: 0 auto;

  width: min(${props => props.theme.constants.contentMaxWidth}, 100%);

  padding-inline: ${props => props.theme.spacing.large};
  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }

  padding-bottom: ${props => props.theme.spacing.veryLarge};
`

const FooterWrapper = styled.footer`
  grid-area: footer;
  margin: 0 auto;

  max-width: ${props => props.theme.constants.contentMaxWidth};

  padding-inline: ${props => props.theme.spacing.large};
  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

interface LayoutProps extends PageProps {
  data: {
    strapiGlobal: {
      siteName: string
      contactEmail: string
      siteLanguage: string
      socialNetworks: {
        title: string
        url: string
      }
    }
  }
}

export default Layout
