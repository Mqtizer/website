import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import FeatureCard from './feature_card'

const SectionTitle = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.25rem;
`
const SectionSubtitle = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`
export function Features() {
  const data = useStaticQuery<Queries.Query>(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { kind: { eq: "feature" } } }) {
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
    <Section id="features">
      <StaticImage quality={100} src="../../../images/feature_icon.png" alt="Features Icon" width={72} height={72} />

      <SectionTitle>Unlock the Power of Mqtizer</SectionTitle>

      <SectionSubtitle>
        Mqtizer offers a range of innovative features designed to simplify your IoT development process. From seamless
        collaboration and simulated data generation to comprehensive configuration management, Mqtizer empowers you to
        create robust and efficient IoT solutions.
      </SectionSubtitle>

      {features.map(feature => {
        const featuredImg = getImage(feature.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
        const reverse = feature.frontmatter?.index % 2 !== 0
        return (
          <FeatureCard
            key={feature.frontmatter?.index}
            title={feature.frontmatter?.title || 'title'}
            subtitle={feature.html || 'subtitle'}
            image={featuredImg}
            reverse={reverse}
          />
        )
      })}
    </Section>
  )
}
