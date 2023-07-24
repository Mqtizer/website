import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import './global.css'
import MainLayout from '../layouts'

import { Faq, Features, HeroSection, Why } from '../components/homepage'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          flexDirection: 'column',
          width: '100vw',
          gap: '2rem',
        }}
      >
        <HeroSection />
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '80vw',

            margin: '0 auto',
            gap: '6rem',
            maxWidth: '1360px',
            minWidth: '320px',
          }}
        >
          <Why />
          <Features />
          <Faq />
        </div>
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mqtizer</title>
