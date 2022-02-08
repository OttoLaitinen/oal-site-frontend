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
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }
    const { edges } = data.allStrapiPhotograph
    edges.forEach(edge => {
      createPage({
        path: `/photography/${edge.node.slug}`,
        component: path.resolve(`./src/templates/photograph.tsx`),
        context: {
          id: edge.node.id,
          previousId: edge.previous
            ? edge.previous.id
            : edges[edges.length - 1].node.id,
          nextId: edge.next ? edge.next.id : edges[0].node.id,
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
