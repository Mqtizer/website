import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export type FeatureCardProps = {
  title: string
  subtitle: string
  image: any
  direction?: 'row' | 'row-reverse'
}

const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

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
      font-weight: 600;
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

export default function FeatureCard({ title, subtitle, image, direction }: FeatureCardProps) {
  return (
    <FeatureCardWrapper
      style={{
        flexDirection: direction,
      }}
    >
      <GatsbyImage className="image" image={image} alt="feature image" />
      <div className="text">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
    </FeatureCardWrapper>
  )
}
