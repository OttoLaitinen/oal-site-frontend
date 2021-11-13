import * as React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import Layout from "../components/layout"
import styled from "styled-components"

const IndexPage: React.FC<IndexPageProps> = props => {
  const { data } = props
  const profilePicture = getImage(
    data.strapiHome.profilePicture.localFile.childImageSharp.gatsbyImageData
  )
  console.log(props.path)
  return (
    <AboutGrid>
      {profilePicture && (
        <GatsbyImage image={profilePicture} alt={"Pic of me lol"} />
      )}
      <div>
        <h1>{data.strapiHome.title}</h1>
        <p>{data.strapiHome.bio}</p>
      </div>
    </AboutGrid>
  )
}

const AboutGrid = styled.section`
  display: grid;
  grid-template-columns: [picture-start] 1fr [text-start] ${props =>
      props.theme.size.textContentWidth} [text-end];
  max-width: 55rem;
  column-gap: ${props => props.theme.spacing.large};
  margin: 0 auto;
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
