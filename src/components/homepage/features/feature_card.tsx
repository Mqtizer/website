import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export type FeatureCardProps = {
  title: string
  subtitle: string
  image: any
  reverse?: boolean
}

const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: var(--direction);
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .image {
    border-radius: 1rem;
    max-width: 1000px;
    flex: 1.2;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;

    h2 {
      font-size: 3rem;
      font-style: normal;
      font-weight: 500;
      line-height: 3.25rem;
    }
    p {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
      strong {
        color: #7a5900;
        font-weight: 460;
      }
    }
  }
`

export default function FeatureCard({ title, subtitle, image, reverse }: FeatureCardProps) {
  return (
    <FeatureCardWrapper
      style={{
        // @ts-ignore
        '--direction': reverse ? 'row-reverse' : 'row',
      }}
    >
      <div
        className="image"
        data-sal={reverse ? 'slide-left' : 'slide-right'}
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="250"
      >
        <GatsbyImage image={image} alt="feature image" />
      </div>

      <div
        className="text"
        data-sal={reverse ? 'slide-right' : 'slide-left'}
        data-sal-delay="250"
        data-sal-easing="ease"
        data-sal-duration="250"
      >
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
    </FeatureCardWrapper>
  )
}
