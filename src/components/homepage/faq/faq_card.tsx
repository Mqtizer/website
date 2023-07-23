import styled from '@emotion/styled'

import React from 'react'

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  cursor: pointer;

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
  }
`

type FaqCardProps = {
  question: string
  answer: string
}
export function FaqCard({ question, answer }: FaqCardProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <FaqContainer
      onClick={() => setOpen(!open)}
      style={{
        borderBottom: open ? '2px solid #353d69' : '2px solid #c6c5d0',
        backgroundColor: open ? '#F3F4FB' : '#FCFCFF',
      }}
    >
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
          height: open ? 'auto' : '0',
          overflow: 'hidden',
          padding: open ? '2rem 0' : '0',
        }}
      >
        {answer}
      </p>
    </FaqContainer>
  )
}
