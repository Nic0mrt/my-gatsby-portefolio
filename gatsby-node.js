exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  articles.forEach(article => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.strapiId,
        slug: article.node.slug,
      },
    })
  })

  // Create Projects pages
  const projects = result.data.allMarkdownRemark.edges
  projects.forEach(project => {
    createPage({
      path: `/project/${project.node.frontmatter.slug}`,
      component: require.resolve("./src/templates/projectTemplate.js"),
      context: {
        slug: project.node.frontmatter.slug,
      },
    })
  })
}
