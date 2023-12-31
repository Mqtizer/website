import styled from '@emotion/styled'
import { HeadFC, Link, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
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
  gap: 1.4rem;
  width: 80vw;
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
  padding: 4rem 0;

  .gatsby-image-wrapper {
    width: 100%;
    border-radius: 8px;
    padding: 0;
    margin: auto;
    margin-bottom: 0rem;
  }

  .share-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    position: relative;

    .share {
      color: #191c1e;
      padding: 2rem;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;

      :hover .modal-wrapper {
        display: flex;
        top: 4rem;
        right: 1rem;
        position: absolute;
      }
    }
  }

  .html-content {
    & :is(h2, h3, h4, h5, h6) {
      font-style: normal;
      font-weight: 500;
      margin: 4rem 0 2rem 0;
    }

    h1 {
      font-size: 3.25rem;
      line-height: 4rem;
      padding: 1rem 0;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.25rem;
      line-height: 2.25rem;
    }
    h3 {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }

    h4 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    a {
      font-weight: 400;
      font-style: italic;
      :hover {
        text-shadow: 0px 0px 1px #191c1eaa;
      }
    }

    ul {
      list-style-type: none;
      li {
        font-size: 1.2rem;
        line-height: 2rem;
      }
      li::before {
        content: '👉';
        color: #00115a;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-right: 1rem;
        margin-left: 1rem;
      }
      padding-bottom: 2rem;
    }

    .gatsby-resp-image-wrapper {
      margin: 2rem 0;
      aspect-ratio: 9/1;
      // display: inline !important;
      img {
        // object-fit: cover !important;
        aspect-ratio: 9/6 auto;
      }
    }
    p {
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin-bottom: 2rem;
      font-weight: 300;
      text-align: justify;
    }
  }
`

const AuthorCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .gatsby-image-wrapper {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: auto;
  }
  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
    height: 100%;
    .name {
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 900;
    }
    .sub {
      font-weight: 300;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      row-gap: 0rem;
      flex-wrap: wrap;
    }
  }
`

export default function BlogTemplate({
  pageContext: { title, featuredImage, executiveSummary, html, date, author },
  location: { href: url },
}: DetailsProps) {
  const featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData as any) as any
  const authorImg = getImage(author.featuredImage?.childImageSharp?.gatsbyImageData as any) as any
  return (
    <MainLayout footerMarginTop="8rem" footerMarginTopMobile="8rem">
      <BlogContainer>
        <GatsbyImage image={featuredImg} alt={title} aria-placeholder={title} />
        <div className="share-row">
          <AuthorCard to={author.website} target="_blank">
            <GatsbyImage image={authorImg} alt={title} aria-placeholder={title} />
            <div className="information">
              <span className="name">{author.name}</span>
              <span className="sub">
                {date} · <span>{minutesToRead(html)}</span>
              </span>
            </div>
          </AuthorCard>

          <div className="share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
            </svg>
            <ShareButtons url={url} title={title} description={executiveSummary} />
          </div>
        </div>

        <div className="html-content" dangerouslySetInnerHTML={{ __html: html }} />
      </BlogContainer>
      {/* <h1>THIS POST</h1>
      <h2>THIS POST</h2>
      <pre>{JSON.stringify({ pageContext }, null, 2)}</pre> */}
    </MainLayout>
  )
}

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
