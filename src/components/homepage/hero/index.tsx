import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Hero = styled.div`
  background: #feebcc url('fade_logo.svg') no-repeat;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  background-position: calc(100% + 96px) -12vh;
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
  margin: auto;
  color: #353d69;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0rem;
    width: 100vw;
    .hero_phone {
      display: none;
    }
  }
`
const LogoText = styled.p`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.43938rem;
`

const Subtitle = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
`

export function HeroSection() {
  return (
    <div
      style={{
        position: 'relative',
        height: '80vh',
        maxHeight: '840px',
        width: '100vw',
      }}
    >
      <Hero />
      <HeroLayer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '500px',
            padding: '2rem',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <StaticImage src="../../../images/icon.png" alt="Logo" height={72} />
            <LogoText>MQTIZER</LogoText>
          </span>
          <Subtitle>The Cross-Platform MQTT Client for Industrial-Grade IoT Solutions</Subtitle>
          <Subtitle>Get the app on Store</Subtitle>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <Link
              to="https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en_US"
              target="blank"
            >
              <StaticImage quality={100} src="../../../images/google_play.svg" alt="Google Play" height={52} />
            </Link>
            <StaticImage quality={100} src="../../../images/apple_store.svg" alt="Apple Store" height={52} />
          </div>
        </div>

        <StaticImage
          className="hero_phone"
          src="../../../images/hero_phone.png"
          alt="Hero Phone"
          width={6000}
          quality={100}
          style={{
            transform: 'translateY(12%) translateX(-2%)',
            width: '80vh',
            maxWidth: '700px',
          }}
        />
      </HeroLayer>
    </div>
  )
}
