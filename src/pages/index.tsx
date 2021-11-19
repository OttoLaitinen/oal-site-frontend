import * as React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import styled from "styled-components"

import StyledMarkdown from "../components/StyledMarkdown"

const IndexPage: React.FC<IndexPageProps> = props => {
  const { data } = props
  const profilePicture = getImage(
    data.strapiHome.profilePicture.localFile.childImageSharp.gatsbyImageData
  )
  console.log(props.path)
  return (
    <AboutGrid>
      {profilePicture && (
        <ProfilePicture image={profilePicture} alt={"Pic of me lol"} />
      )}
      <div>
        <h1>{data.strapiHome.title}</h1>

        <StyledMarkdown content={data.strapiHome.bio} />
      </div>
    </AboutGrid>
  )
}

const AboutGrid = styled.section`
  display: grid;
  grid-template-columns: [picture-start] 1fr [text-start] ${props =>
      props.theme.size.textContentWidth} [text-end];
  max-width: ${props => props.theme.contentMaxWidth};
  column-gap: ${props => props.theme.spacing.veryLarge};
  align-items: center;
  margin: 0 auto;
`

const ProfilePicture = styled(GatsbyImage)`
  border-radius: 27% 73% 48% 52% / 37% 31% 69% 63%;
  transition: border-radius 200ms;

  :hover {
    border-radius: 82% 18% 86% 14% / 37% 69% 31% 63%;
  }
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
            gatsbyImageData(width: 660)
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
