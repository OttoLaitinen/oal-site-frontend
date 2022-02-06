const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  return graphql(`
    {
      allStrapiPhotograph {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }
    const { edges } = data.allStrapiPhotograph
    edges.forEach(({ node }) => {
      createPage({
        path: `/photography/${node.slug}`,
        component: path.resolve(`./src/templates/photograph.tsx`),
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: require.resolve(`@emotion/babel-preset-css-prop`),
    options: {
      sourceMap: "dev-only",
      autoLabel: "dev-only",
    },
  })
}
