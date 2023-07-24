import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Contact from './contact'

interface MainLayoutProps {
  children: React.ReactNode
  contactModalState?: boolean
}
export default function MainLayout({ children, contactModalState = false }: MainLayoutProps) {
  const [contactModalOpen, setContactModalOpen] = useState(contactModalState)

  useEffect(() => {
    setContactModalOpen(contactModalState)
  }, [contactModalState])

  return (
    <>
      <Contact open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <Navbar onContactCTAClick={() => setContactModalOpen(true)} />
      {children}
      <Footer onContactCTAClick={() => setContactModalOpen(true)} />
    </>
  )
}
