import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { CalendarIcon, ClockIcon, TagIcon } from '../icons'

export type BlogCardProps = {
  title: string
  slug: string
  executiveSummary: string
  image: any
  date: string
  reverse?: boolean
  authorName: string
  authorImage: any
  readingTime?: number
  tags?: string[]
}

interface BlogCardWrapperProps {
  reverse?: boolean
}

const BlogCardWrapper = styled(Link)<BlogCardWrapperProps>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.04),
    0px 4px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .text {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    order: ${props => (props.reverse ? 2 : 1)};

    .header {
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      line-height: 1.4;
      color: #18181b;
      margin-bottom: 1rem;
      transition: color 0.3s ease;
    }

    &:hover h2 {
      color: #4263eb;
    }

    .description {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      color: #52525b;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .meta {
      margin-top: auto;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    order: ${props => (props.reverse ? 1 : 2)};

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;

      img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: center !important;
      }
    }

    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        ${props => (props.reverse ? 'to left' : 'to right')},
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0)
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover .image .gatsby-image-wrapper {
    transform: scale(1.03);
  }

  &:hover .image:after {
    opacity: 1;
  }

  @media (max-width: 992px) {
    .text {
      padding: 1.75rem;

      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    .image {
      position: relative;
      grid-row: 1;
      aspect-ratio: 16/9;
      order: 1;

      .gatsby-image-wrapper {
        position: relative !important;
        border-radius: 16px 16px 0 0;
      }
    }

    .text {
      grid-row: 2;
      order: 2;
      padding: 1.5rem;

      h2 {
        font-size: 1.35rem;
      }
    }
  }
`

const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #27272a;
  }

  .gatsby-image-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 0 0 2px white;
  }
`

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-bottom: 0.75rem;

  .info-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #71717a;
    font-size: 0.875rem;

    svg {
      color: #a1a1aa;
      width: 1rem;
      height: 1rem;
    }
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    background-color: #f4f4f5;
    border-radius: 16px;
    font-size: 0.75rem;
    color: #52525b;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background-color: #e4e4e7;
    }
  }
`

export function BlogCard({
  title,
  slug,
  executiveSummary,
  image,
  authorName,
  authorImage,
  date,
  reverse,
  readingTime = 5,
  tags = ['MQTT', 'IoT'],
}: BlogCardProps) {
  // Format the date to make it more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <BlogCardWrapper
      to={`/blog/${slug}`}
      style={{
        // @ts-ignore
        '--direction': reverse ? 'row-reverse' : 'row',
      }}
      data-sal={reverse ? 'slide-right' : 'slide-left'}
      data-sal-delay="200"
      data-sal-easing="ease-out"
      data-sal-duration="500"
    >
      <div className="text">
        <div>
          <div className="header">
            <MetaInfo>
              <div className="info-group">
                <div className="info-item">
                  <CalendarIcon />
                  <span>{formattedDate}</span>
                </div>
                <div className="info-item">
                  <ClockIcon />
                  <span>{readingTime} min read</span>
                </div>
              </div>
              <div className="tags">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </MetaInfo>
          </div>
          <h2>{title}</h2>
          <p className="description">{executiveSummary}</p>
        </div>

        <div className="meta">
          <AuthorCard>
            <GatsbyImage image={authorImage} alt={authorName} aria-placeholder={authorName} />
            <p className="name">{authorName}</p>
          </AuthorCard>
        </div>
      </div>
      <div className="image">
        <GatsbyImage image={image} alt={title} aria-placeholder={title} />
      </div>
    </BlogCardWrapper>
  )
}
