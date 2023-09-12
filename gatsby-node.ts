import { CreatePagesArgs } from 'gatsby'
import path from 'path'
export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  const blogResults = await graphql<Queries.Query>(`
    query AllDetailsBlogs {
      allMarkdownRemark(filter: { frontmatter: { kind: { eq: "blog" } } }) {
        nodes {
          frontmatter {
            title
            slug
            keywords
            executiveSummary
            date
            author
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 1200)
              }
            }
          }
          html
        }
      }
    }
  `)

  const userResults = await graphql<Queries.Query>(`
    query AllDetailsUsers {
      allMarkdownRemark(filter: { frontmatter: { kind: { eq: "team" } } }) {
        nodes {
          frontmatter {
            name
            id
            website
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  `)

  if (blogResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (userResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPosts = blogResults.data?.allMarkdownRemark.nodes
  const users = userResults.data?.allMarkdownRemark.nodes || []

  const getUser = (id: string) => users.find(user => user.frontmatter?.id === id)?.frontmatter || {}

  if (blogPosts) {
    blogPosts.forEach(post => {
      const author = getUser(post.frontmatter?.author || '')
      createPage({
        path: `/blog/${post.frontmatter?.slug}`,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          ...post.frontmatter,
          html: post.html,
          author,
        },
      })
    })
  }
}
