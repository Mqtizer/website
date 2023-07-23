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
  padding: 1rem;

  .image {
    border-radius: 1rem;
    max-width: 1000px;
    flex: 1;
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
    h3 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
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
        <h3>{subtitle}</h3>
      </div>
    </FeatureCardWrapper>
  )
}
