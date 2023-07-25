import styled from '@emotion/styled'
import React from 'react'
import useForm from '../../hooks/useForm'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  background-color: rgba(10, 10, 10, 0.3);
  z-index: 100;

  width: 100vw;
  height: 100vh;
`

const ModalWrapper = styled.div`
  padding: 6rem 4rem 4rem 4rem;
  width: min(80vw, 800px);
  min-height: 400px;
  margin: 0 auto;
  position: relative;
  background: #fcfcff url('fade_circle_big.svg') no-repeat;
  background-size: cover;
  backdrop-filter: blur(px);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #191c1e;
  h4 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
  }
  input,
  textarea {
    color: #191c1e;
    width: 100%;
    max-width: 460px;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #353d69;
    background-color: #fcfcff;
    font-size: 1.2rem;
    ::placeholder {
      color: #353d69aa;
      font-size: 1.2rem;
    }
    .error {
      border: 1px solid #ff331f;
    }
  }
  .send {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 0.8rem 2rem;
    max-width: 460px;
  }
`
const CloseButton = styled.button`
  padding: 1rem;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
`
export type ContactProps = {
  open?: boolean
  onClose: () => void
}

export default function Contact({ open, onClose }: ContactProps) {
  if (!open) return null
  const { state, registerField, noErrors, reset, valueExists } = useForm({
    name: '',
    email: '',
    message: `I want to know more about MQTIZER!`,
  })

  const handleSubmit = async () => {
    onClose()
    try {
      console.log(state)
      reset()
    } catch (error) {
      console.error(error)

      alert('Error sending message.')
      reset()
    }
  }

  return (
    <Backdrop>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.1663 7.4785L20.5213 5.8335L13.9997 12.3552L7.47801 5.8335L5.83301 7.4785L12.3547 14.0002L5.83301 20.5218L7.47801 22.1668L13.9997 15.6452L20.5213 22.1668L22.1663 20.5218L15.6447 14.0002L22.1663 7.4785Z"
              fill="#fcfcff"
            />
          </svg>
        </CloseButton>
        <h4>Contact Us</h4>
        <input
          type="text"
          {...registerField('name', {
            validator: value => {
              if (value.length < 0) {
                return 'Name is required'
              }
              return ''
            },
          })}
        />
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
          {...registerField('message', {
            validator: value => {
              if (value.length < 0) {
                return 'Message is required'
              }
              return ''
            },
          })}
        />
        <button
          className="send"
          disabled={!noErrors || !valueExists(['name', 'email', 'message'])}
          onClick={async () => {
            await handleSubmit()
          }}
        >
          Send
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            width="32px"
            height="32px"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="currentColor"
            viewBox="0 0 512 371.13"
          >
            <path d="M397 141.12c63.51 0 115 51.5 115 115.01 0 63.5-51.49 115-115 115s-115.02-51.5-115.02-115c0-63.51 51.51-115.01 115.02-115.01zM28.8 0h389.26c15.73 0 28.52 12.88 28.5 28.53l-.1 95.75c-7.58-2.84-15.46-5.04-23.59-6.55l.07-77.07-125.82 98.89 9.17 8.99c-3.04 2.56-5.94 5.24-8.75 8.04l-.09.1c-3.27 3.27-6.37 6.72-9.32 10.29l-10.89-10.69-42.14 35.87c-4.49 3.77-11.46 4.22-16.5.12l-44.24-36.1L39.45 282.69h219.27a140.08 140.08 0 0 0 6.71 23.6H28.49C12.74 306.29 0 293.42 0 277.76L.24 28.52C.27 12.84 13.05 0 28.8 0zm-5.19 261.9 130.45-122.08L23.82 41.69l-.21 220.21zM42.65 23.6l183.96 141.87L400.69 23.6H42.65zm358.01 180.04 49.96 51.69-51.52 53.32-16.07-15.44 25.81-26.71-65.47.07V244.3l65.53-.07-24.3-25.15 16.06-15.44z" />
          </svg>
        </button>
      </ModalWrapper>
    </Backdrop>
  )
}
