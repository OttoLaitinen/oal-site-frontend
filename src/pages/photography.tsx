import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import { PhotographyPageQuery } from "../../graphql-types"
import StyledMarkdown from "../components/common/StyledMarkdown"
import Seo from "../components/seo"
import { ContentFlex } from "../components/layout"
import Gallery from "../components/Gallery"
import useWindowSize from "../hooks/useWindowSize"
import { useTheme } from "@emotion/react"
import { GALLERY_IMAGE_MAX_WIDTH } from "../components/Gallery"

const PhotographyPage: React.FC<PageProps<PhotographyPageQuery>> = props => {
  const { data } = props
  const windowSize = useWindowSize()
  const windowWidth = windowSize.width || Infinity
  const theme = useTheme()

  const headerPicture = getImage(
    data.strapiPhotography?.headerPicture?.headerPhoto?.localFile
      ?.childImageSharp?.gatsbyImageData
  )
  const pictureCredit = data.strapiPhotography?.headerPicture?.photoCredit

  const allImages = data.allStrapiPhotograph?.edges.map(i => ({
    id: i.node.id,
    title: i.node.title || undefined,
    slug: i.node.slug || "",
    imageData: getImage(
      i.node.image?.localFile?.childImageSharp?.gatsbyImageData
    ),
    aspectRatio:
      i.node.image?.localFile?.childImageSharp?.fluid?.aspectRatio || 0,
  }))

  return (
    <>
      <Seo />
      <ContentFlex>
        <HeaderSection>
          <HeaderSectionTitleColumn>
            <h1>{data.strapiPhotography?.title}</h1>
            <StyledMarkdown content={data.strapiPhotography?.headerText} />
          </HeaderSectionTitleColumn>

          {headerPicture && (
            <HeaderSectionPictureColumn>
              <HeaderPicture
                image={headerPicture}
                alt={"Pic of me lol"}
                objectPosition="bottom"
              />
              <PhotoCaption>{pictureCredit}</PhotoCaption>
            </HeaderSectionPictureColumn>
          )}
        </HeaderSection>
        <PhotoSection>
          <h1>Photos</h1>
          <Gallery
            images={allImages}
            itemsPerRow={
              windowWidth <= theme.breakpoints.phone
                ? 1
                : windowWidth <= theme.breakpoints.tablet
                ? 2
                : 3
            }
          />
        </PhotoSection>
      </ContentFlex>
    </>
  )
}

const HeaderSection = styled.section`
  display: grid;
  grid-template-columns: [title-start] 0.6fr [picture-start] 0.4fr [picture-end];
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
const HeaderSectionTitleColumn = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  place-content: center;

  gap: ${props => props.theme.spacing.regular};
`
const HeaderSectionPictureColumn = styled.div`
  grid-area: picture;
  display: flex;
  flex-direction: column;
  place-content: center;

  gap: ${props => props.theme.spacing.verySmall};
`

const HeaderPicture = styled(GatsbyImage)`
  border-radius: ${props => props.theme.spacing.regular};

  ${props => props.theme.media.phone} {
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: ${props => props.theme.spacing.small};
  }
`
const PhotoCaption = styled.span`
  ${props => props.theme.typography.bodyTiny}
  align-self: flex-end;
`

const PhotoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.regular};
`

export const pageQuery = graphql`
  query PhotographyPage {
    strapiPhotography {
      title
      headerText
      headerPicture {
        photoCredit
        headerPhoto {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
      seo {
        title
        description
      }
    }
    allStrapiPhotograph {
      edges {
        node {
          id
          photoTaken
          title
          slug
          seo {
            title
          }
          image {
            localFile {
              childImageSharp {
                fluid {
                  aspectRatio
                }
                gatsbyImageData(width: 750)
              }
            }
          }
        }
      }
    }
  }
`

export default PhotographyPage
