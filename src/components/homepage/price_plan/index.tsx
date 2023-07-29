import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useContactForm } from '../../../context/contact_form'

const SectionTitle = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.25rem;
`
const SectionSubtitle = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  width: 100vw;
  padding: 8rem 12rem;

  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
  background-color: #e3e1ec;
  color: #191c1e;

  @media (max-width: 920px) {
    padding: 4rem 2rem;
  }
`

const PricingPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  flw-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  gap: 2rem;
  width: 100%;
  padding: 4rem 0;


  .deep-shadow {
    box-shadow: 0px 25px 80px 0px #353D69;
  }
  .plan {
    min-width: 460px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 0.2rem;
    background-color: #FCFCFF;
    padding: 2.5rem 2.5rem 2.5rem 2.75rem;
    border-radius: 3.125rem 1rem;

    h3 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.5rem;
      color: #00115A;
    }
    h4 {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
      color: #353D69;
      margin-bottom: 2rem;
    }
  
    .quota-section{
      padding: 0.8rem 0;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 1.6rem;

      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.25rem;
      }
    }

  }
    @media (max-width: 920px) {
    flex-direction: column;
    row-gap: 4rem;
    .plan{
      width: 100%;
        min-width: 0px;
    }
  }
}
`

const newLocal = (
  <StaticImage quality={100} src="../../../images/quota_icon.svg" alt="Features Icon" width={32} height={32} />
)
export function PricePlan() {
  const { setContactModalOpen } = useContactForm()
  return (
    <Section id="pricing">
      <StaticImage quality={100} src="../../../images/pricing_icon.png" alt="Features Icon" width={72} height={72} />
      <SectionTitle>Pricing Plan</SectionTitle>
      <SectionSubtitle>No Surprise Fees</SectionSubtitle>
      <PricingPlanContainer>
        <div className="plan deep-shadow">
          <h3>Freemium Plan</h3>
          <h4>Enjoy full functionality forever</h4>
          <div className="quota-section">
            <span>{newLocal}2 Workspace</span>
            <span>{newLocal}3 Brokers per Workspace</span>
            <span>{newLocal}3 Members per Workspace</span>
            <span>{newLocal}3 Templates per Broker</span>
          </div>
        </div>
        <div className="plan">
          <h3>Pro Plan</h3>
          <h4>We are yet to figure out 🤪</h4>
          <StaticImage
            style={{
              margin: 'auto',
            }}
            quality={100}
            src="../../../images/quota_pro.svg"
            alt="Features Icon"
            width={220}
            height={220}
          />

          <button
            style={{
              width: '100%',
            }}
            onClick={() => setContactModalOpen()}
          >
            Contact the Team
          </button>
        </div>
      </PricingPlanContainer>
    </Section>
  )
}
