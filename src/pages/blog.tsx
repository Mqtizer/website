import styled from '@emotion/styled'
import { HeadFC, PageProps, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React, { useMemo, useState } from 'react'
import { BlogCard } from '../components/blog/blog_card'
import BlogPagination from '../components/blog/blog_pagination'
import SEO from '../components/seo'
import MainLayout from '../layouts'

// Constants
const BLOGS_PER_PAGE = 6

// Styled Components
const BlogsWrapper = styled.div`
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  min-height: 100vh;
`

const BlogsContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 4rem 0 6rem;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const BlogHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`

const BlogTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const BlogSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const FeaturedPostSection = styled.div`
  margin-bottom: 4rem;
`

const FeaturedPostHeading = styled.h2`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: #e5e7eb;
    margin-left: 1rem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 600px), 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    gap: 2rem;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f9fafb;
  border-radius: 12px;
  margin: 2rem 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #111827;
  }

  p {
    color: #6b7280;
  }
`

export default function Blog({ data }: PageProps<Queries.Query>) {
  // Extract and process blog data
  let blogs = data.allMarkdownRemark.nodes as any[]
  blogs = blogs.sort(dateSort).filter(dataFilterShowDatedOnlyBeforeToday)

  // Extract user data
  const d = data as any
  let users = d.users.nodes as any[]

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1)

  // Helper function to get user by ID
  const getUser = (id: string) => users.find(user => user.frontmatter.id === id)?.frontmatter

  // Get featured (latest) blog post
  const featuredBlog = blogs[0]

  // Rest of the blog posts for pagination
  const remainingBlogs = blogs.slice(1)

  // Paginate remaining blogs
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
    return remainingBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE)
  }, [remainingBlogs, currentPage])

  // Calculate total pages for remaining blogs
  const totalPages = Math.max(1, Math.ceil(remainingBlogs.length / BLOGS_PER_PAGE))

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Calculate estimated reading time (words per minute)
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200
    const wordCount = text?.split(/\s+/).length || 0
    return Math.ceil(wordCount / wordsPerMinute) || 5 // default to 5 minutes if calculation fails
  }

  // Create the featured blog card component
  const renderFeaturedBlog = () => {
    if (!featuredBlog) return null

    const featuredImg = getImage(featuredBlog.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
    const user = getUser(featuredBlog.frontmatter?.author)
    const tags = featuredBlog.frontmatter?.keywords?.split(',').map((k: string) => k.trim()) || []
    const readingTime = calculateReadingTime(featuredBlog.html || featuredBlog.excerpt || '')

    return (
      <FeaturedPostSection>
        <FeaturedPostHeading>Latest Post</FeaturedPostHeading>
        <BlogCard
          title={featuredBlog.frontmatter?.title || 'Untitled'}
          slug={featuredBlog.frontmatter?.slug || ''}
          executiveSummary={featuredBlog.frontmatter?.executiveSummary || ''}
          authorName={user?.name || 'Author'}
          authorImage={getImage(user?.featuredImage?.childImageSharp?.gatsbyImageData as any)}
          image={featuredImg}
          date={featuredBlog.frontmatter?.date || ''}
          readingTime={readingTime}
          tags={tags.slice(0, 2)}
        />
      </FeaturedPostSection>
    )
  }

  return (
    <MainLayout footerMarginTop="0" footerMarginTopMobile="0">
      <BlogsWrapper>
        <BlogsContainer>
          <BlogHeader>
            <BlogTitle>Blog</BlogTitle>
            <BlogSubtitle>Insights, tutorials, and updates about MQTT and IoT technology</BlogSubtitle>
          </BlogHeader>

          {/* Featured Blog Post */}
          {blogs.length > 0 && renderFeaturedBlog()}

          {/* Remaining Blog Posts */}
          {remainingBlogs.length > 0 ? (
            <>
              <FeaturedPostHeading>More Posts</FeaturedPostHeading>
              <GridContainer>
                {paginatedBlogs.map((blog, index) => {
                  const featuredImg = getImage(blog.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
                  const user = getUser(blog.frontmatter?.author)
                  const tags = blog.frontmatter?.keywords?.split(',').map((k: string) => k.trim()) || []
                  const readingTime = calculateReadingTime(blog.html || blog.excerpt || '')

                  return (
                    <BlogCard
                      key={blog.frontmatter?.slug || index}
                      title={blog.frontmatter?.title || 'Untitled'}
                      slug={blog.frontmatter?.slug || ''}
                      executiveSummary={blog.frontmatter?.executiveSummary || ''}
                      authorName={user?.name || 'Author'}
                      authorImage={getImage(user?.featuredImage?.childImageSharp?.gatsbyImageData as any)}
                      image={featuredImg}
                      date={blog.frontmatter?.date || ''}
                      reverse={index % 2 !== 0}
                      readingTime={readingTime}
                      tags={tags.slice(0, 2)}
                    />
                  )
                })}
              </GridContainer>

              <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </>
          ) : blogs.length === 0 ? (
            <EmptyState>
              <h3>No blog posts available</h3>
              <p>Check back later for new content</p>
            </EmptyState>
          ) : null}
        </BlogsContainer>
      </BlogsWrapper>
    </MainLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "blog" } } }) {
      nodes {
        html
        excerpt
        frontmatter {
          title
          slug
          keywords
          executiveSummary
          date
          author
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 90)
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
              gatsbyImageData(width: 400, quality: 90)
            }
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <SEO title="Blog | MQTizer" />

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
