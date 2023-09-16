import styled from '@emotion/styled'
import { HeadFC, PageProps, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { BlogCard } from '../components/blog/blog_card'
import SEO from '../components/seo'
import MainLayout from '../layouts'
const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 3rem;
  width: 80vw;
  max-width: 1360px;
  min-width: 320px;
  margin: 0 auto;
  padding: 4rem 0;
  h1 {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
  }
`
export default function Blog({ data }: PageProps<Queries.Query>) {
  let blogs = data.allMarkdownRemark.nodes as any[]
  blogs = blogs.sort(dateSort).filter(dataFilterShowDatedOnlyBeforeToday)

  const d = data as any
  let users = d.users.nodes as any[]

  const getUser = (id: string) => users.find(user => user.frontmatter.id === id).frontmatter
  return (
    <MainLayout footerMarginTop="8rem" footerMarginTopMobile="8rem">
      <BlogsContainer>
        <h1>Blogs</h1>
        {blogs.map((part, index) => {
          const featuredImg = getImage(part.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
          const reverse = index % 2 === 0
          const user = getUser(part.frontmatter?.author)
          return (
            <BlogCard
              title={part.frontmatter?.title || 'title'}
              slug={part.frontmatter?.slug || 'slug'}
              executiveSummary={part.frontmatter?.executiveSummary || 'description'}
              authorName={user.name}
              authorImage={getImage(user.featuredImage?.childImageSharp?.gatsbyImageData as any)}
              image={featuredImg}
              date={part.frontmatter?.date || 'date'}
              reverse={reverse}
            />
          )
        })}
      </BlogsContainer>
    </MainLayout>
  )
}

export const query = graphql`
  {
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
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }

    users: allMarkdownRemark(filter: { frontmatter: { kind: { eq: "team" } } }) {
      nodes {
        frontmatter {
          name
          id
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <SEO title=" Blog" />

// Sort function for blogs comparing the date
function dateSort(a: { frontmatter: { date: string } }, b: { frontmatter: { date: string } }) {
  const dateA = new Date(a.frontmatter?.date)
  const dateB = new Date(b.frontmatter?.date)
  return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
}

function dataFilterShowDatedOnlyBeforeToday(a: { frontmatter: { date: string } }) {
  const dateA = new Date(a.frontmatter?.date)
  const dateB = new Date()
  return dateA < dateB
}
