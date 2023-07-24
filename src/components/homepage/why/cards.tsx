import React from 'react'
import { StaticImage, GatsbyImage, getImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const PainCardContainer = styled.div`
  width: 36vw;
  align-self: stretch;
  flex: auto;
  max-width: 600px;
  min-height: 300px;
  position: relative;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.2rem;
  background-color: #fcfcff;
  @media (max-width: 768px) {
    width: 80vw;
  }

  .text-content {
    display: flex;

    flex-direction: column;
    gap: 1.2rem;
    padding: 4rem 2rem 2rem 2rem;
    h3 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.25rem;
      color: #191c1e;
    }
    p {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.25rem;
      color: #46464f;
    }
  }
  .icon {
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #feebcc;
    border: 0.5rem solid #fcfcff;
    padding: 1rem;
    box-shadow: 0px -4px 10px -5px rgba(0, 0, 0, 0.25);
  }
`

const PainCard1 = () => (
  <PainCardContainer data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-in-out" data-sal-duration="200">
    <div className="icon">
      <StaticImage
        quality={100}
        src="../../../images/why/difficulty.png"
        alt="Challenging & Inefficient Development"
        height={56}
      />
    </div>

    <div className="text-content">
      <h3>Challenging & Inefficient Development</h3>
      <p>Developing IoT applications with existing MQTT clients can be challenging and inefficient.</p>
    </div>
  </PainCardContainer>
)

const PainCard2 = () => (
  <PainCardContainer data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-in-out" data-sal-duration="200">
    <div className="icon">
      <StaticImage quality={100} src="../../../images/why/stress.png" alt="Slowing Down Your Progress" height={56} />
    </div>

    <div className="text-content">
      <h3>Slowing Down Your Progress</h3>
      <p>
        Don't let outdated MQTT clients slow down your progress! Get ready to experience a seamless development process
        with MQTIZER.
      </p>
    </div>
  </PainCardContainer>
)

const PainCard3 = () => (
  <PainCardContainer data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-in-out" data-sal-duration="200">
    <div className="icon">
      <StaticImage quality={100} src="../../../images/why/solution.png" alt="Empowering IoT Developers" height={56} />
    </div>

    <div className="text-content">
      <h3>Empowering IoT Developers</h3>
      <p>
        Our cross-platform mobile-first MQTT client empowers you with a feature-rich & user-friendly tool. Say goodbye
        to challenges.
      </p>
    </div>
  </PainCardContainer>
)

const PainCard4 = () => (
  <PainCardContainer data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-in-out" data-sal-duration="200">
    <div className="icon">
      <StaticImage
        quality={100}
        src="../../../images/why/increase.png"
        alt="Streamline, Collaborate & Communicate"
        height={56}
      />
    </div>

    <div className="text-content">
      <h3>Streamline, Collaborate & Communicate</h3>
      <p>Streamline your IoT development, enhance collaboration, & ensure reliable communication with MQTT brokers.</p>
    </div>
  </PainCardContainer>
)

export { PainCard1, PainCard2, PainCard3, PainCard4 }
