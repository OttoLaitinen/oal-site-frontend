import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from "react-moment"
import Markdown from "react-markdown"
import Seo from "../components/seo"
import { SinglePhotographQuery } from "../../graphql-types"
import styled from "@emotion/styled"
import StyledMarkdown from "../components/common/StyledMarkdown"

export const query = graphql`
  query SinglePhotograph($id: String!, $previousId: String, $nextId: String) {
    current: strapiPhotograph(id: { eq: $id }) {
      id
      title
      seo {
        title
        id
      }
      image {
        alternativeText
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1200)
            fluid {
              aspectRatio
            }
          }
        }
      }
      photoTaken
    }
    previous: strapiPhotograph(id: { eq: $previousId }) {
      id
      slug
    }
    next: strapiPhotograph(id: { eq: $nextId }) {
      id
      slug
    }
  }
`

const Photograph: React.FC<PageProps<SinglePhotographQuery>> = ({
  data,
  pageContext,
}) => {
  console.log(data)
  const photographData = data.current
  const photoImageObject = photographData?.image

  const photoImageData = getImage(
    photoImageObject?.localFile?.childImageSharp?.gatsbyImageData
  )
  return (
    <>
      <Seo />
      <ContentColumn>
        <PhotographColumn>
          <h3>{photographData?.title || "Untitled"}</h3>
          {photoImageData && (
            <PhotographWrapper
              aspectRatio={
                photoImageObject?.localFile?.childImageSharp?.fluid
                  ?.aspectRatio || 0
              }
            >
              <GatsbyImage
                image={photoImageData}
                alt={photoImageObject?.alternativeText || ""}
                objectFit="contain"
              />
            </PhotographWrapper>
          )}
          <ButtonRow>
            <TextButton
              className="button"
              to={
                data.previous?.slug ? `/photography/${data.previous.slug}` : "/"
              }
            >
              Prev
            </TextButton>{" "}
            |{" "}
            <TextButton
              className="button"
              to={data.next?.slug ? `/photography/${data.next.slug}` : "/"}
            >
              Next
            </TextButton>
          </ButtonRow>
        </PhotographColumn>

        {photoImageObject?.caption && photoImageObject.caption !== "" && (
          <SectionColumn>
            <h3>Description</h3>
            <StyledMarkdown content={photoImageObject.caption} />
          </SectionColumn>
        )}
      </ContentColumn>
    </>
  )
}

const PhotographWrapper = styled.div<{ aspectRatio: number }>`
  max-width: calc(70vh * ${props => props.aspectRatio});
`
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large};
  margin-top: ${props => props.theme.spacing.regular};
`
const SectionColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.regular};

  width: 100%;
`

const PhotographColumn = styled(SectionColumn)`
  align-items: center;
  justify-content: center;
  min-height: 85vh;

  ${props => props.theme.media.phone} {
    min-height: 75vh;
  }
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.verySmall};
  margin-top: auto;
  ${props => props.theme.typography.subtitle};
`

const TextButton = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.black};
`

export default Photograph
