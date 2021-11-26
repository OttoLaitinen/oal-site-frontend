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
      <OverviewGrid>
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
      </OverviewGrid>
    </>
  )
}

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns:
    [left-start] 1fr [middle-start]
    ${props => props.theme.constants.contentMaxWidth}
    [right-start] 1fr [right-end];
  row-gap: ${props => props.theme.spacing.veryLarge};

  ${props => props.theme.media.phone} {
    row-gap: ${props => props.theme.spacing.large};
  }
`
const LanderSection = styled.section`
  grid-column-start: middle-start;
  grid-column-end: right-start;

  display: grid;
  grid-template-columns: [title-start] 0.58fr [picture-start] 0.42fr [picture-end];
  grid-template-rows: auto auto;
  grid-template-areas:
    "title picture"
    "title picture";

  column-gap: ${props => props.theme.spacing.veryLarge};
  justify-content: space-between;
  align-items: center;

  padding-inline: ${props => props.theme.spacing.large};
  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }

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
  border-radius: ${props => props.theme.borderRadius};
  aspect-ratio: 4 / 5;

  ${props => props.theme.media.phone} {
    aspect-ratio: 5 / 4;
    width: 100%;
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
  grid-column-start: middle-start;
  grid-column-end: right-start;

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.regular};

  padding-inline: ${props => props.theme.spacing.large};
  ${props => props.theme.media.phone} {
    padding-inline: 0;
  }

  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }
`

export const pageQuery = graphql`
  query IndexPage {
    strapiHome {
      title
      bio
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1800)
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
