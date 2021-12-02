import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import { PhotographyPageQuery } from "../../graphql-types"
import StyledMarkdown from "../components/common/StyledMarkdown"
import Seo from "../components/seo"
import { ContentFlex } from "../components/layout"

const PhotographyPage: React.FC<PageProps<PhotographyPageQuery>> = props => {
  const { data } = props
  const headerPicture = getImage(
    data.strapiPhotography?.headerPicture?.headerPhoto?.localFile
      ?.childImageSharp?.gatsbyImageData
  )
  const pictureCredit = data.strapiPhotography?.headerPicture?.photoCredit

  const phold = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Et ab repellat voluptates dolores, accusamus numquam doloribus possimus 
     nihil omnis molestiae ullam libero alias deserunt corrupti cupiditate dolore officiis recusandae repellendus.`

  return (
    <>
      <Seo />
      <ContentFlex>
        <HeaderSection>
          <HeaderSectionTitleColumn>
            <h1>Yes, I do photos too!</h1>
            <StyledMarkdown content={phold} />
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

  gap: ${props => props.theme.spacing.large};
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
    img > {
      object-position: bottom;
    }
  }
`
const PhotoCaption = styled.span`
  ${props => props.theme.typography.bodyTiny}
  align-self: flex-end;
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
              gatsbyImageData
            }
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

export default PhotographyPage
