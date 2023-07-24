import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export type AboutCardProps = {
  title: string
  description: string
  image: any
  reverse?: boolean
}

const AboutCardWrapper = styled.div`
  display: flex;
  flex-direction: var(--direction);
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .text {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    h2 {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 3.25rem;
      color: #191c1e;
    }
    p {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
      color: #46464f;
      strong {
        font-weight: 600;
      }
    }
  }
  .image {
    flex: 1;
  }
`
export default function AboutCard({ title, description, image, reverse }: AboutCardProps) {
  return (
    <AboutCardWrapper
      style={{
        // @ts-ignore
        '--direction': reverse ? 'row-reverse' : 'row',
      }}
    >
      <div
        className="text"
        data-sal={reverse ? 'slide-right' : 'slide-left'}
        data-sal-delay="250"
        data-sal-easing="ease"
        data-sal-duration="250"
      >
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div
        className="image"
        data-sal={reverse ? 'slide-left' : 'slide-right'}
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="250"
      >
        <GatsbyImage image={image} alt="feature image" />
      </div>
    </AboutCardWrapper>
  )
}
