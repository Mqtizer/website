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
  color: #46464f;
  margin-bottom: 2rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.4rem;
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
        Unleash MQTT's Potential with MQTIZER! Empowering Industry4.0 growth, our features simplify collaboration, data
        simulation, and configuration management. Create powerful M2M solutions effortlessly.
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
