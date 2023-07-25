import './global.css'
import React, { useEffect, useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { ContactFormContainer } from '../context/contact_form'
interface MainLayoutProps {
  children: React.ReactNode
  footerChildren?: React.ReactNode
}
export default function MainLayout({ children, footerChildren }: MainLayoutProps) {
  return (
    <ContactFormContainer>
      <Navbar />
      {children}
      <Footer>{footerChildren}</Footer>
    </ContactFormContainer>
  )
}
