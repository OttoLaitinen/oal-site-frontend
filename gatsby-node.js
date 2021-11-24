exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: require.resolve(`@emotion/babel-preset-css-prop`),
    options: {
      sourceMap: "dev-only",
      autoLabel: "dev-only",
    },
  })
}
