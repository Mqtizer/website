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
    @media (max-width: 768px) {
      padding: 6rem 2rem 2rem 2rem;
    }
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
      <h3>Unleash Efficiency in IoT Development</h3>
      <p>Experience the challenge-free and efficient development process with MQTIZER's cutting-edge MQTT client.</p>
    </div>
  </PainCardContainer>
)

const PainCard2 = () => (
  <PainCardContainer data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-in-out" data-sal-duration="200">
    <div className="icon">
      <StaticImage quality={100} src="../../../images/why/stress.png" alt="Slowing Down Your Progress" height={56} />
    </div>

    <div className="text-content">
      <h3>Accelerate Progress with MQTIZER</h3>
      <p>
        Outdated MQTT clients slowing you down? Say hello to a seamless and progressive development journey with
        MQTIZER.
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
      <h3>Empowerment for Industry4.0 Innovators</h3>
      <p>
        Our cross-platform mobile-first MQTT client empowers you with user-friendly tools, removing all hurdles in your
        way.
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
      <h3>Seamless Streamlining, Collaboration & Communication</h3>
      <p>
        Optimize IoT development, enhance collaboration, and communicate effortlessly with MQTT brokers using MQTIZER.
      </p>
    </div>
  </PainCardContainer>
)

export { PainCard1, PainCard2, PainCard3, PainCard4 }
