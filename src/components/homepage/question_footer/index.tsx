import styled from '@emotion/styled'
import React from 'react'
import { useContactForm } from '../../../context/contact_form'

const QuestionSection = styled.div`
  position: absolute;
  top: -8rem;
  left: 10vw;
  background: #dee0ff url('/fade_circle.svg') no-repeat;
  background-size: cover;
  width: 80vw;
  padding: 3.75rem 5.75rem;
  border-radius: 5rem 1.5rem;
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 920px) {
    flex-direction: column;
    gap: 2rem;
    padding: 3.75rem 2.75rem;
  }
  .left {
    display: flex;
    flex-direction: column;
    color: #00115a;
    gap: 0.8rem;
    .head {
      font-size: 3rem;
      font-style: normal;
      font-weight: 500;
      line-height: 3.25rem;
    }
    .foot {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
    }
  }
`

export const QuestionSectionFooter: React.FC = () => {
  const { setContactModalOpen } = useContactForm()
  return (
    <QuestionSection>
      <div className="left">
        <span className="head">Still Have a Question?</span>
        <span className="foot">Contact our Developers.</span>
      </div>
      <button
        onClick={() => setContactModalOpen()}
        style={{
          fontSize: '1.375rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '1.75rem',
          padding: '0.75rem 1.25rem',
        }}
      >
        Contact Us
      </button>
    </QuestionSection>
  )
}
