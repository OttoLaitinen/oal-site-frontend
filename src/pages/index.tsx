import * as React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import styled from "styled-components"

import StyledMarkdown from "../components/StyledMarkdown"
import SocialLinksList from "../components/SocialLinksList"

const IndexPage: React.FC<IndexPageProps> = props => {
  const { data } = props
  const profilePicture = getImage(
    data.strapiHome.profilePicture.localFile.childImageSharp.gatsbyImageData
  )
  console.log(props.path)
  return (
    <AboutGrid>
      <LanderSection>
        <LanderSectionLeftColumn>
          <PageTitle>
            Hello there! I am Otto.
            <br />
            I design and develop
            <br />
            software products.
          </PageTitle>
          <SocialLinksList />
        </LanderSectionLeftColumn>

        {profilePicture && (
          <ProfilePicture image={profilePicture} alt={"Pic of me lol"} />
        )}
      </LanderSection>
    </AboutGrid>
  )
}

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns:
    [left-start] 1fr [middle-start]
    ${props => props.theme.constants.contentMaxWidth}
    [right-start] 1fr [right-end];
`
const LanderSection = styled.section`
  grid-column-start: middle-start;
  grid-column-end: right-start;

  display: grid;
  grid-template-columns: [title-start] 0.55fr [picture-start] 0.45fr [picture-end];
  column-gap: ${props => props.theme.spacing.veryLarge};
  justify-content: space-between;
  align-items: center;
`
const LanderSectionLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  gap: ${props => props.theme.spacing.large};
`

const ProfilePicture = styled(GatsbyImage)`
  border-radius: ${props => props.theme.borderRadius};
  aspect-ratio: 4 / 5;
  /* -webkit-clip-path: polygon(32% 0, 80% 0, 80% 100%, 0 100%);
  clip-path: polygon(32% 0, 80% 0, 80% 100%, 0 100%); */
  /* -webkit-clip-path: url();
  clip-path: url(); */
`
const PageTitle = styled.h1`
  font-size: min(3rem, 4vw);
`

interface IndexPageProps extends PageProps {
  data: {
    strapiHome: {
      title: string
      bio: string
      profilePicture: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: ImageDataLike
          }
        }
      }
      seo: {
        title: string
        description: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
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
