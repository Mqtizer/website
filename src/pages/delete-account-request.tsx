import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import useForm from '../hooks/useForm'
import { navigate } from 'gatsby'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
const DeleteAccountContainer = styled.div`
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

export default function DeleteAccount() {
  const { state, registerField, noErrors, reset, valueExists } = useForm({
    email: '',
    reason: '',
  })

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.MAPI_URL}public/delete-account-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      const { error, message } = await response.json()
      if (error) alert(error)
      if (message) {
        navigate('/')
        alert('Message sent successfully.')
      }
    } catch (error) {
      alert('Error sending message. Please verify your email address and try again.')
      reset()
    }
  }

  return (
    <DeleteAccountContainer>
      <h1>
        <StaticImage src="../images/icon.png" alt="Logo" height={112} />
        DELETE<i>MQTIZER</i>ACCOUNT
      </h1>
      <p>
        If you want to delete your account, please enter your email address and a reason for deleting your account.
        <br />
        After submitting the form, you will receive an email with a link to confirm the deletion of your account.
        <br />
        <br />
        <strong>NOTE:</strong> <i>An account once deleted cannot be recovered.</i>
      </p>
      <input
        type="email"
        {...registerField('email', {
          validator: value => {
            // validate email with regex
            if (!value.match(EMAIL_REGEX)) {
              return 'Invalid email'
            }
            return ''
          },
        })}
      />

      <textarea
        rows={2}
        {...registerField(
          'reason',
          {
            validator: value => {
              if (value.length < 0) {
                return 'Message is required'
              }
              return ''
            },
          },
          'Please enter a reason for deleting your account.\nWe would love to hear your feedback.'
        )}
      />
      <br />
      <button
        disabled={!noErrors || !valueExists(['email', 'reason'])}
        onClick={async () => {
          await handleSubmit()
        }}
      >
        Delete Account
      </button>
    </DeleteAccountContainer>
  )
}
