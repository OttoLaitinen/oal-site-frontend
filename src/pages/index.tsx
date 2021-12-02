import * as React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import StyledMarkdown from "../components/common/StyledMarkdown"
import SocialLinksList from "../components/common/SocialLinksList"
import useWindowSize from "../hooks/useWindowSize"
import theme from "../styles/theme"
import { IndexPageQuery } from "../../graphql-types"
import Seo from "../components/seo"
import { ContentFlex } from "../components/layout"

const IndexPage: React.FC<PageProps<IndexPageQuery>> = props => {
  const { data } = props
  const profilePicture = getImage(
    data.strapiHome?.profilePicture?.localFile?.childImageSharp?.gatsbyImageData
  )
  const windowSize = useWindowSize()
  const windowWidth = windowSize.width || Infinity

  return (
    <>
      <Seo />
      <ContentFlex>
        <LanderSection>
          <LanderSectionTitleColumn>
            <PageTitle>
              Hello there! I am Otto.
              <br />
              I design and develop
              <br />
              software products.
            </PageTitle>
            {windowWidth > theme.breakpoints.phone && <SocialLinksList />}
          </LanderSectionTitleColumn>

          {profilePicture && (
            <ProfilePicture image={profilePicture} alt={"Pic of me lol"} />
          )}
        </LanderSection>
        <AboutSection>
          <h1>About</h1>
          <StyledMarkdown content={data.strapiHome?.bio} />
        </AboutSection>
      </ContentFlex>
    </>
  )
}

const LanderSection = styled.section`
  display: grid;
  grid-template-columns: [title-start] 0.58fr [picture-start] 0.42fr [picture-end];
  grid-template-rows: auto auto;
  grid-template-areas:
    "title picture"
    "title picture";

  column-gap: ${props => props.theme.spacing.veryLarge};
  justify-content: space-between;
  align-items: center;

  ${props => props.theme.media.phone} {
    gap: ${props => props.theme.spacing.large} 0px;
    grid-template-areas:
      "picture picture"
      "title title";
  }
`
const LanderSectionTitleColumn = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  place-content: center;

  gap: ${props => props.theme.spacing.large};
`

const ProfilePicture = styled(GatsbyImage)`
  grid-area: picture;
  border-radius: ${props => props.theme.spacing.regular};
  aspect-ratio: 4 / 5;

  ${props => props.theme.media.phone} {
    aspect-ratio: 5 / 4;
    width: 100%;
    border-radius: ${props => props.theme.spacing.small};
  }
  /* -webkit-clip-path: polygon(32% 0, 80% 0, 80% 100%, 0 100%);
  clip-path: polygon(32% 0, 80% 0, 80% 100%, 0 100%); */
  /* -webkit-clip-path: url();
  clip-path: url(); */
`
const PageTitle = styled.h1`
  font-size: min(3rem, 4.5vw);

  ${props => props.theme.media.phone} {
    font-size: min(3rem, 8vw);
  }
`
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.regular};
`

export const pageQuery = graphql`
  query IndexPage {
    strapiHome {
      title
      bio
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
`

export default IndexPage
