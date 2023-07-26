import styled from '@emotion/styled'
import { HeadFC, PageProps, graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import MainLayout from '../layouts'
const PolicyContainer = styled.div`
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
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;

  h1 {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
    color: #353d69;
    margin: 2rem 0rem;
  }
  h2 {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
    margin: 2rem 0rem;
  }
  p {
    margin: 1rem;
  }
  a {
    margin: 1rem;
    text-decoration: none;
    color: #353d69;
  }
  a:hover {
    color: #353d69;
    text-shadow: 0px 0px 1px #191c1e;
  }

  li {
    margin: 1rem 3rem;
  }
`
export default function About({ data }: PageProps<Queries.Query>) {
  let privacyPolicy = data.markdownRemark as any

  if (!privacyPolicy || !privacyPolicy.html) return <div>404</div>

  return (
    <MainLayout>
      <PolicyContainer>
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy.html }} />
      </PolicyContainer>
    </MainLayout>
  )
}

export const query = graphql`
  {
    markdownRemark(id: { eq: "e527610e-d67d-5545-aa4b-04b79bfeb099" }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export const Head: HeadFC = () => <SEO title=" Privacy Policy" />