import styled from '@emotion/styled'
import { HeadFC, Link, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState, useEffect, useRef } from 'react'
import ShareButtons from '../components/blog/share_button'
import SEO from '../components/seo'
import MainLayout from '../layouts'

interface DetailsProps extends PageProps {
  pageContext: {
    title: string
    slug: string
    keywords: string
    executiveSummary: string
    date: string
    author: {
      name: string
      id: string
      website: string
      featuredImage: any
    }
    featuredImage: any
    html: string
  }
}

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 768px;
  min-width: 320px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 800px) {
    padding: 1rem;
    width: 95%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .blog-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.5rem 0;

    @media (max-width: 600px) {
      font-size: 2.2rem;
    }
  }

  .blog-subtitle {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5;
    color: #555;
    margin-bottom: 2rem;
  }

  .share-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .html-content {
    & :is(h2, h3, h4, h5, h6) {
      font-style: normal;
      font-weight: 600;
      margin: 3rem 0 1.5rem 0;
      scroll-margin-top: 80px;
    }

    h1 {
      font-size: 2.75rem;
      line-height: 1.3;
      margin: 1.5rem 0;

      @media (max-width: 600px) {
        font-size: 2.2rem;
      }
    }

    h2 {
      font-size: 2rem;
      line-height: 1.3;
    }

    h3 {
      font-size: 1.65rem;
      line-height: 1.4;
    }

    h4 {
      font-size: 1.4rem;
      line-height: 1.5;
    }

    a {
      font-weight: 500;
      color: #006eee;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        text-decoration: underline;
        color: #0052b3;
      }
    }

    ul {
      list-style-type: none;
      padding-left: 1rem;
      margin: 1.5rem 0 2rem;

      li {
        font-size: 1.2rem;
        line-height: 1.7;
        margin-bottom: 0.8rem;
        position: relative;
        padding-left: 1.8rem;
      }

      li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #006eee;
        font-weight: bold;
      }
    }

    .gatsby-resp-image-wrapper {
      margin: 2.5rem 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    p {
      font-size: 1.25rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-weight: 400;
      color: #333;
    }

    blockquote {
      border-left: 4px solid #006eee;
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: #555;
    }

    code {
      background-color: #f6f8fa;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.9em;
    }

    pre {
      background-color: #f6f8fa;
      padding: 1.2rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 2rem 0;
    }
  }
`

const AuthorCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .gatsby-image-wrapper {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;

    .name {
      font-size: 1.1rem;
      font-style: normal;
      font-weight: 700;
      color: #333;
    }

    .sub {
      font-size: 0.9rem;
      font-weight: 400;
      color: #666;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      .dot {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #666;
      }

      .read-time {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
`

const ShareButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .share-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #f5f5f5;
    color: #333;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #e8e8e8;
      transform: translateY(-2px);
    }
  }

  .share-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #666;
  }

  .share-dropdown {
    display: flex;
    gap: 0.75rem;
  }
`

const ReadingProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.05);
`

const ReadingProgressBar = styled.div<{ width: string }>`
  height: 100%;
  background-color: #006eee;
  width: ${props => props.width};
  transition: width 0.1s ease;
`

const TableOfContentsContainer = styled.div`
  position: sticky;
  top: 80px;
  width: 220px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 1rem;
  margin-left: 2rem;
  border-left: 1px solid #eee;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }

  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
    margin: 0 0 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;

    a {
      color: #555;
      text-decoration: none;
      transition: color 0.2s ease;
      display: block;
      padding: 0.25rem 0;
      border-left: 2px solid transparent;
      padding-left: 0.75rem;
      margin-left: -1rem;

      &:hover {
        color: #006eee;
      }

      &.active {
        color: #006eee;
        border-left-color: #006eee;
        font-weight: 500;
      }
    }

    &.h3 {
      padding-left: 1rem;
      font-size: 0.85rem;
    }
  }
`

const BlogContentContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  .content-main {
    flex: 1;
    max-width: 768px;
  }
`

export default function BlogTemplate({
  pageContext: { title, featuredImage, executiveSummary, html, date, author },
  location: { href: url },
}: DetailsProps) {
  const featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData as any) as any
  const authorImg = getImage(author.featuredImage?.childImageSharp?.gatsbyImageData as any) as any
  const [readingProgress, setReadingProgress] = useState(0)
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: string }[]>([])
  const [activeHeading, setActiveHeading] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  // Calculate reading progress
  useEffect(() => {
    const updateReadingProgress = () => {
      if (!contentRef.current) return

      const contentElement = contentRef.current
      const totalHeight = contentElement.clientHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY

      if (totalHeight - windowHeight === 0) {
        setReadingProgress(100)
      } else {
        const progress = (scrollTop / (totalHeight - windowHeight)) * 100
        setReadingProgress(Math.min(100, Math.max(0, progress)))
      }
    }

    // Extract table of contents from HTML
    const extractTableOfContents = () => {
      if (!contentRef.current) return

      const headings = contentRef.current.querySelectorAll('h2, h3')
      const toc: { id: string; text: string; level: string }[] = []

      headings.forEach(heading => {
        const id = heading.id || `heading-${toc.length}`
        if (!heading.id) heading.id = id

        toc.push({
          id,
          text: heading.textContent || '',
          level: heading.tagName.toLowerCase(),
        })
      })

      setTableOfContents(toc)
    }

    // Update active heading on scroll
    const updateActiveHeading = () => {
      if (tableOfContents.length === 0) return

      const headingElements = tableOfContents
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element.getBoundingClientRect().top <= 100) {
          setActiveHeading(element.id)
          return
        }
      }

      setActiveHeading('')
    }

    window.addEventListener('scroll', updateReadingProgress)
    window.addEventListener('resize', updateReadingProgress)
    window.addEventListener('scroll', updateActiveHeading)

    extractTableOfContents()
    updateReadingProgress()

    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
      window.removeEventListener('resize', updateReadingProgress)
      window.removeEventListener('scroll', updateActiveHeading)
    }
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    // In a real implementation, we'd show a toast notification here
    alert('Link copied to clipboard!')
  }

  const renderShareButtons = () => (
    <ShareButtonContainer>
      <span className="share-label">Share</span>
      <div className="share-dropdown">
        <button
          className="share-button"
          aria-label="Share on Twitter"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
              '_blank'
            )
          }
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>
        <button
          className="share-button"
          aria-label="Share on LinkedIn"
          onClick={() =>
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
          }
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>
        <button className="share-button" aria-label="Copy link" onClick={copyToClipboard}>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </ShareButtonContainer>
  )

  const minutesToRead = (text: string) => {
    const wordsPerMinute = 200
    const numberOfWords = text.replace(/<[^>]*>/g, '').split(/\s/g).length
    return `${Math.ceil(numberOfWords / wordsPerMinute)} min read`
  }

  const readingTime = minutesToRead(html)

  return (
    <MainLayout footerMarginTop="8rem" footerMarginTopMobile="4rem">
      {/* Reading Progress Indicator */}
      <ReadingProgressContainer>
        <ReadingProgressBar width={`${readingProgress}%`} />
      </ReadingProgressContainer>

      <BlogContentContainer>
        <div className="content-main">
          <BlogContainer>
            <GatsbyImage image={featuredImg} alt={title} aria-placeholder={title} />
            <h1 className="blog-title">{title}</h1>
            <p className="blog-subtitle">{executiveSummary}</p>

            <div className="share-row">
              <AuthorCard to={author.website} target="_blank">
                <GatsbyImage image={authorImg} alt={author.name} aria-placeholder={author.name} />
                <div className="information">
                  <span className="name">{author.name}</span>
                  <span className="sub">
                    {date} <span className="dot"></span>
                    <span className="read-time">
                      <svg
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {readingTime}
                    </span>
                  </span>
                </div>
              </AuthorCard>

              {renderShareButtons()}
            </div>

            <div className="html-content" dangerouslySetInnerHTML={{ __html: html }} ref={contentRef} />
          </BlogContainer>
        </div>

        {/* Table of Contents Sidebar */}
        {tableOfContents.length > 0 && (
          <TableOfContentsContainer>
            <h4>Contents</h4>
            <ul>
              {tableOfContents.map(({ id, text, level }) => (
                <li key={id} className={level}>
                  <a
                    href={`#${id}`}
                    className={activeHeading === id ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault()
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </TableOfContentsContainer>
        )}
      </BlogContentContainer>
    </MainLayout>
  )
}

// Keep original helper function
const minutesToRead = (text: string) => {
  const wordsPerMinute = 250
  const numberOfWords = text.replace(/<[^>]*>/g, '').split(/\s/g).length
  return `${Math.ceil(numberOfWords / wordsPerMinute)} min read`
}

export const Head: HeadFC = ({ location, pageContext }) => {
  const { featuredImage, title, executiveSummary, keywords } = pageContext as DetailsProps['pageContext']

  return (
    <SEO
      title={title}
      description={executiveSummary}
      keyWords={keywords.split(',')}
      pathname={location.pathname}
      image={featuredImage.publicURL}
    />
  )
}
