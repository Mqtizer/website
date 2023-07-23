import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import FeatureCard from './feature_card'

const SectionTitle = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.25rem;
`
const SectionSubtitle = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`
const Section = styled.div`
  padding: 3.25rem 5.75rem 2.5rem 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
`
export function Features() {
  const data = useStaticQuery<Queries.Query>(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            subtitle
            featuredImage {
              childImageSharp {
                gatsbyImageData(height: 1000)
              }
            }
          }
        }
      }
    }
  `)
  const features = data.allMarkdownRemark.nodes

  return (
    <Section>
      <SectionTitle>Unlock the Power of Mqtizer</SectionTitle>
      <SectionSubtitle>
        Mqtizer offers a range of innovative features designed to simplify your IoT development process. From seamless
        collaboration and simulated data generation to comprehensive configuration management, Mqtizer empowers you to
        create robust and efficient IoT solutions.
      </SectionSubtitle>

      {features.map(feature => {
        const featuredImg = getImage(feature.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData)
        const direction = features.indexOf(feature) % 2 === 0 ? 'row' : 'row-reverse'
        return (
          <FeatureCard
            title={feature.frontmatter?.title || 'title'}
            subtitle={feature.frontmatter?.subtitle || 'subtitle'}
            image={featuredImg}
            direction={direction}
          />
        )
      })}
    </Section>
  )
}
