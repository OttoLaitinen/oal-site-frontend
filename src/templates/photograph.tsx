import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from "react-moment"
import Markdown from "react-markdown"
import Seo from "../components/seo"
import { SinglePhotographQuery } from "../../graphql-types"

export const query = graphql`
  query SinglePhotograph($id: String!) {
    strapiPhotograph(id: { eq: $id }) {
      id
      seo {
        title
        id
      }
      image {
        alternativeText
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
      photoTaken
    }
  }
`

const Photograph: React.FC<PageProps<SinglePhotographQuery>> = ({ data }) => {
  const photographData = data.strapiPhotograph
  const photoImageObject = photographData?.image

  const photoImageData = getImage(
    photoImageObject?.localFile?.childImageSharp?.gatsbyImageData
  )
  return (
    <>
      <Seo />
      {photoImageData && (
        <GatsbyImage
          image={photoImageData}
          alt={photoImageObject?.alternativeText || ""}
        />
      )}
    </>
  )
}

export default Photograph
