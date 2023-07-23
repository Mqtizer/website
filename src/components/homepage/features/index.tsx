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
`
export function Features() {
  const data = useStaticQuery<Queries.Query>(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            index
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
          html
        }
      }
    }
  `)
  let features = data.allMarkdownRemark.nodes as any[]

  features = features.sort((a: { frontmatter: { index: number } }, b: { frontmatter: { index: number } }) => {
    return a.frontmatter?.index - b.frontmatter?.index
  })

  return (
    <Section>
      <SectionTitle>Unlock the Power of Mqtizer</SectionTitle>
      <br />
      <br />
      <SectionSubtitle>
        Mqtizer offers a range of innovative features designed to simplify your IoT development process. From seamless
        collaboration and simulated data generation to comprehensive configuration management, Mqtizer empowers you to
        create robust and efficient IoT solutions.
      </SectionSubtitle>
      <br />

      {features.map(feature => {
        const featuredImg = getImage(feature.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
        const direction = features.indexOf(feature) % 2 === 0 ? 'row' : 'row-reverse'
        return (
          <FeatureCard
            title={feature.frontmatter?.title || 'title'}
            subtitle={feature.html || 'subtitle'}
            image={featuredImg}
            direction={direction}
          />
        )
      })}
    </Section>
  )
}
