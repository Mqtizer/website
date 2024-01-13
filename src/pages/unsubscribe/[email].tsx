import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

const DeleteConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.4rem;
  width: 80vw;
  max-width: 1360px;
  min-width: 320px;
  margin: 0 auto;
  padding: 4rem 0;
  h1 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    // margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    // line-height: 2.4rem;
    // margin-bottom: 2rem;
  }
`

export default function Unsubscribe(props: PageProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { email } = props.params
  // return (
  //   <div
  //     className="lds-dual-ring"
  //     style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh',
  //       width: '100vw',
  //     }}
  //   ></div>
  // )
  return (
    <DeleteConfirmContainer>
      <StaticImage placeholder="blurred" src="../../images/icon.png" alt="Logo" height={112} />
      <h1>Unsubscribe</h1>
      {/* <div className="lds-dual-ring"></div> */}
      <p>
        Are you sure you want to unsubscribe from all emails?
        <br />
        You might miss out on important updates and information.
      </p>
      <p> If you are sure, click the button below.</p>
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FEFEFE" viewBox="0 0 256 256">
          <path d="M224,60H32A20,20,0,0,0,12,80v72a20,20,0,0,0,20,20H52v28a12,12,0,0,0,24,0V172H180v28a12,12,0,0,0,24,0V172h20a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,59L185,84h35Zm-43,29L113,84H151l64,64Zm-72,0L41,84H79l64,64ZM36,113l35,35H36Z"></path>
        </svg>
        Unsubscribe
      </button>
    </DeleteConfirmContainer>
  )
}
