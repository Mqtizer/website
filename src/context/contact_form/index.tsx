import React, { ReactNode, useContext, useState } from 'react'

import ContactForm from './contact'

type ContactFormContextProps = {
  contactModalOpen: boolean
  setContactModalOpen: () => void
}

const defaultContactFormContext: ContactFormContextProps = {
  contactModalOpen: false,
  setContactModalOpen: () => {},
}

export const ContactFormContext = React.createContext<ContactFormContextProps>(defaultContactFormContext)

type ContactFormProps = {
  children: ReactNode
}

const useContactForm = (): ContactFormContextProps => useContext<ContactFormContextProps>(ContactFormContext)

const ContactFormContainer = ({ children }: ContactFormProps) => {
  const [contactModalOpen, setContactModal] = useState(false)

  const setContactModalOpen = () => setContactModal(true)

  return (
    <ContactFormContext.Provider value={{ contactModalOpen, setContactModalOpen }}>
      <ContactForm open={contactModalOpen} onClose={() => setContactModal(false)} />
      {children}
    </ContactFormContext.Provider>
  )
}

export { ContactFormContainer, useContactForm }
export type { ContactFormContextProps }
