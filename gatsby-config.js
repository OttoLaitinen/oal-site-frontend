require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
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
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {
    //     // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
    //     // The values for each key in this example are the defaults the plugin uses.
    //     sourceMap: true,
    //     autoLabel: "dev-only",
    //     labelFormat: `[local]`,
    //     cssPropOptimization: true,
    //   },
    // },
  ],
}
