import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <h1>{data.strapiHome.title}</h1>
      <p>{data.strapiHome.bio}</p>
    </Layout>
  )
}

const query = graphql`
  query {
    strapiHome {
      title
      bio
      seo {
        title
        description
      }
    }
  }
`

export default IndexPage
