require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Otto A. Laitinen",
    author: "Otto A. Laitinen",
    description:
      "Hello there! I'm Otto and I design and develop software products. This is my personal website and portfolio.",
    url: "https://www.oal.fi", // No trailing slash allowed!
    image: "/social.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "OLaitinen",
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Quicksand",
              axes: "wght@700",
            },
            {
              family: "Karla",
              axes: "ital,wght@0,400;0,500;1,400;1,500",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: ["project", "category"],
        singleTypes: [`home`, `global`],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Otto A. Laitinen",
        short_name: "OAL",
        start_url: "/",
        background_color: `#20306A`,
        theme_color: `#FAFBFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
