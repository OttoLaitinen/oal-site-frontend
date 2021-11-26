/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import { SeoQuery } from "../../graphql-types"

type MetaTags = Array<{ name: string; content: string }>
type OgTags = Array<{ property: string; content: string }>
type ItemPropTags = Array<{ itemprop: string; content: string }>

interface ArticleProps {
  publishedTime: Date
  section: string
  tag: string[]
}

interface SeoProps {
  description?: string
  lang?: string
  meta?: MetaTags | OgTags | ItemPropTags
  title?: string
  socialImage?: { url: string; alt?: string }
  articleSeo?: ArticleProps
  author?: string
}

interface MetaQuery {
  site: {
    siteMetadata: SeoProps
  }
}

const Seo: React.FC<SeoProps> = ({
  description,
  lang = "en",
  meta = [],
  title = "",
  socialImage,
  author = "",
  articleSeo,
}) => {
  const { site }: SeoQuery = useStaticQuery(query)
  const siteMetadata = site?.siteMetadata || undefined

  const { pathname } = useLocation()

  const metaDescription = description || siteMetadata?.description || ""

  const metaUrl = `${siteMetadata?.url}${pathname === "/" ? "" : pathname}`
  const metaTitle = title || siteMetadata?.defaultTitle || ""
  const metaImageUrl = socialImage
    ? socialImage?.url
    : `${siteMetadata?.url}${siteMetadata?.image}`
  const metaImageAlt = socialImage?.alt || "Otto A. Laitinen"

  const generalTags: MetaTags = [
    { name: "author", content: siteMetadata?.author || "" },
    { name: "copyright", content: siteMetadata?.author || "" },
    { name: "description", content: metaDescription },
  ]

  const itemPropTags: ItemPropTags = [
    { itemprop: "description", content: metaDescription },
    { itemprop: "image", content: metaImageUrl || "" },
  ]

  const openGraphTags: OgTags = [
    { property: "og:site_name", content: siteMetadata?.author || "" },
    { property: "og:url", content: metaUrl },
    { property: "og:locale", content: "EN" },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:image", content: metaImageUrl || "" },
  ]

  const twitterTags: MetaTags = [
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: metaImageUrl || "" },
    { name: "twitter:site", content: siteMetadata?.twitterUsername || "" },
    { name: "twitter:domain", content: metaUrl },
  ]

  if (metaImageAlt) {
    openGraphTags.push({ property: "og:image:alt", content: metaImageAlt })
    twitterTags.push({ name: "twitter:image:alt", content: metaImageAlt })
  }

  if (articleSeo) {
    openGraphTags.push({ property: "og:type", content: "article" })
    openGraphTags.push({ property: "article:author", content: metaUrl })
    if (articleSeo.publishedTime) {
      openGraphTags.push({
        property: "article:published_time",
        content: articleSeo.publishedTime.toISOString(),
      })
    }
  } else {
    openGraphTags.push({ property: "og:type", content: "website" })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s · ${siteMetadata?.defaultTitle}`}
      defaultTitle={siteMetadata?.defaultTitle || ""}
      meta={[
        ...generalTags,
        ...itemPropTags,
        ...openGraphTags,
        ...twitterTags,
        ...meta,
      ]}
      link={[{ rel: "canonical", href: metaUrl }]}
    />
  )
}

export default Seo

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        description
        author
        twitterUsername
        url
        image
      }
    }
  }
`
