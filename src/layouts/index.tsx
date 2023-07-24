import React, { useEffect, useState } from 'react'
import Contact from './contact'
import Footer from './footer'
import './global.css'
import Navbar from './navbar'
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
