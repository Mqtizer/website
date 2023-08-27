import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

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
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }
`

export default function DeleteAccountConfirm(props: PageProps) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const { token } = props.params
    const fetchDeleteAccount = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.MAPI_URL}public/delete-account-confirm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
        const { error, name } = await response.json()

        if (error) setError(error)
        if (name) setName(name)

        setLoading(false)
      } catch (error: any) {
        setError("We couldn't find your account. Please try again.")
        setLoading(false)
      }
    }
    fetchDeleteAccount()
  }, [])

  if (error)
    return (
      <DeleteConfirmContainer>
        <p>{error}</p>
      </DeleteConfirmContainer>
    )

  if (loading)
    return (
      <div
        className="lds-dual-ring"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      ></div>
    )

  return (
    <DeleteConfirmContainer>
      <h1>
        <StaticImage placeholder="blurred" src="../../images/icon.png" alt="Logo" height={112} />
        Your account has been deleted.
      </h1>
      <p>
        Thank <i>{name}</i> you for using Mqtizer. We hope to see you again soon.
      </p>
    </DeleteConfirmContainer>
  )
}
