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

const BlogCardWrapper = styled(Link)`
  display: flex;
  flex-direction: var(--direction);
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  cursor: pointer;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  position: relative;
  width: 100%;

  &:hover {
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  .text {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    gap: 1.2rem;

    .header {
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 1.3;
      color: #111827;
      margin-bottom: 1rem;
      transition: color 0.2s ease;
    }

    &:hover h2 {
      color: #4263eb;
    }

    .description {
      font-size: 1.05rem;
      font-weight: 400;
      line-height: 1.6;
      color: #4b5563;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .meta {
      margin-top: auto;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  .image {
    flex: 1;
    min-height: 100%;
    position: relative;
    overflow: hidden;

    .gatsby-image-wrapper {
      height: 100%;
      border-radius: 0;
      transition: transform 0.6s ease;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover .image .gatsby-image-wrapper {
    transform: scale(1.05);
  }

  &:hover .image:after {
    opacity: 1;
  }

  @media (max-width: 992px) {
    .text {
      padding: 2rem;

      h2 {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .image {
      aspect-ratio: 16/9;

      .gatsby-image-wrapper {
        border-radius: 20px 20px 0 0;
      }
    }

    .text {
      h2 {
        font-size: 1.6rem;
      }
    }
  }
`

const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .name {
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
  }

  .gatsby-image-wrapper {
    width: 2.8rem;
    height: 2.8rem;
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
  margin-bottom: 1rem;

  .info-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.9rem;

    svg {
      color: #6b7280;
    }
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.3rem 0.8rem;
    background-color: #f3f4f6;
    border-radius: 20px;
    font-size: 0.75rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background-color: #e5e7eb;
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
