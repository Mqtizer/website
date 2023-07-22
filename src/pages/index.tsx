import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './global.css'
import MainLayout from '../layouts'
import styled from '@emotion/styled'

const Hero = styled.div`
  background: #feebcc url('fade_logo.svg') no-repeat 68vw -12vh;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  padding: 4rem;
  border-radius: 1.5rem;
  height: 80vh;
  max-height: 840px;
  width: 96vw;

  position: absolute;
  top: 0;
  left: 2vw;
`
const HeroLayer = styled.div`
  position: absolute;
  top: 0;
  left: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  max-height: 840px;
  width: 96vw;
`
const LogoText = styled.p`
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.43938rem;
`
const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout openDownloadCTAClick={() => console.log('hello')}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <Hero />
        <HeroLayer>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <StaticImage src="../images/icon.png" alt="A dinosaur" height={70} />
            <LogoText>MQTIZER</LogoText>
          </span>
          <StaticImage
            src="../images/hero_phone.png"
            alt="Hero Phone"
            width={6000}
            quality={100}
            style={{
              transform: 'translateY(12%) translateX(8%)',
              width: '80vh',
              maxWidth: '700px',
            }}
          />
        </HeroLayer>
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mqtizer</title>
