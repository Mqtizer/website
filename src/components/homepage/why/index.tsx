import styled from '@emotion/styled'
import { StaticImage, GatsbyImage, getImageData } from 'gatsby-plugin-image'
import React from 'react'
import { PainCard1, PainCard2, PainCard3, PainCard4 } from './cards'

const SectionTitle = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.25rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  .why-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 6rem;
    text-align: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 6rem;
    }
  }
`

export function Why() {
  return (
    <Section id="why">
      <StaticImage quality={100} src="../../../images/why/icon.svg" alt="Why Mqtizer" height={72} />
      <SectionTitle>Why MQTIZER?</SectionTitle>
      <br />
      <div className="why-container">
        <PainCard1 />
        <PainCard2 />
        <PainCard3 />
        <PainCard4 />
      </div>
    </Section>
  )
}

type PainCardProps = {
  name: string
  icon: string
  description: string
}
