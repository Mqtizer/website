import styled from '@emotion/styled'
import React from 'react'
import MainLayout from '../layouts'
import { HeadFC, PageProps, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { AboutCard, TeamFooter } from '../components/about'
import SEO from '../components/seo'
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.4rem;
  width: 80vw;
  max-width: 1360px;
  min-width: 320px;
  margin: 0 auto;
  padding: 4rem 0;
  h1 {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
    .mq {
      color: #00115a;
      text-transform: uppercase;
    }
  }
`
export default function About({ data }: PageProps<Queries.Query>) {
  let aboutSections = data.allMarkdownRemark.nodes as any[]

  aboutSections = aboutSections.sort((a: { frontmatter: { index: number } }, b: { frontmatter: { index: number } }) => {
    return a.frontmatter?.index - b.frontmatter?.index
  })
  return (
    <MainLayout footerMarginTop="40rem" footerMarginTopMobile="60rem" footerChildren={<TeamFooter />}>
      <AboutContainer>
        <h1>
          About <span className="mq">Mqtizer</span>{' '}
        </h1>
        {aboutSections.map(part => {
          const featuredImg = getImage(part.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any)
          const reverse = part.frontmatter?.index % 2 !== 0
          return (
            <AboutCard
              title={part.frontmatter?.title || 'title'}
              description={part.html || 'description'}
              image={featuredImg}
              reverse={reverse}
            />
          )
        })}
      </AboutContainer>
    </MainLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "about" } } }) {
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
`

export const Head: HeadFC = () => <SEO title=" About" />
