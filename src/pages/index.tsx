import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import './global.css'
import MainLayout from '../layouts'

import { Features, HeroSection } from '../components/homepage'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout openDownloadCTAClick={() => console.log('hello')}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          flexDirection: 'column',
          width: '100vw',
          overflowX: 'hidden',
          gap: '2rem',
        }}
      >
        <HeroSection />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '90vw',
            margin: '0 auto',
            overflowX: 'hidden',
            gap: '2rem',
            maxWidth: '1360px',
            minWidth: '320px',
          }}
        >
          <Features />
        </div>
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mqtizer</title>
