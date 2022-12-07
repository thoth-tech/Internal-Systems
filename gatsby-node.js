exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {}) {
        nodes {
          id
          fileAbsolutePath
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const path = node.fileAbsolutePath.slice(
      node.fileAbsolutePath.indexOf("gatsby-source-git") + 18
    )
    actions.createPage({
      path,
      component: require.resolve("./src/template/doc-details.js"),
      context: { id: node.id },
    })
  })
}
