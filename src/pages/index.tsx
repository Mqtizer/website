import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

import SEO from '../components/seo'
import MainLayout from '../layouts'

import styled from '@emotion/styled'
import { Faq, Features, HeroSection, QuestionSectionFooter, Why } from '../components/homepage'

const HomePageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100vw;
  gap: 2rem;
  .main-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    gap: 6rem;
    max-width: 1360px;
    min-width: 320px;
    margin-top: 4rem;
  }
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout footerChildren={<QuestionSectionFooter />}>
      <HomePageContainer>
        <HeroSection />
        <div className="main-section">
          <Why />
          <Features />
          <Faq />
        </div>
      </HomePageContainer>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
