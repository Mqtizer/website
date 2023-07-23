import styled from '@emotion/styled'

import React from 'react'

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  border-radius: 0.25rem;
  border-bottom: 2px solid #c6c5d0;
  background: #fcfcff;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #353d69;
    background: var(
      --m-3-surfaces-light-surface-2,
      linear-gradient(0deg, rgba(73, 88, 169, 0.08) 0%, rgba(73, 88, 169, 0.08) 100%),
      #fcfcff
    );
    transition: all 0.2s ease-in-out;
  }

  h4 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    display: none;
  }
`

type FaqCardProps = {
  question: string
  answer: string
}
export function FaqCard({ question, answer }: FaqCardProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <FaqContainer onClick={() => setOpen(!open)} className={open ? 'active' : ''}>
      <h4>
        {question}
        <svg
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M17 14L12 9L7 14L17 14Z" fill="#46464F" />
        </svg>
      </h4>
      <p
        style={{
          display: open ? 'block' : 'none',
        }}
      >
        {answer}
      </p>
    </FaqContainer>
  )
}
