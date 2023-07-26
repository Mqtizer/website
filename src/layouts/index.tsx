import React from 'react'
import { ContactFormContainer } from '../context/contact_form'
import Footer from './footer'
import './global.css'
import Navbar from './navbar'
interface MainLayoutProps {
  children: React.ReactNode
  footerChildren?: React.ReactNode
  footerMarginTop?: string
  footerMarginTopMobile?: string
}

export default function MainLayout({
  children,
  footerChildren,
  footerMarginTop,
  footerMarginTopMobile,
}: MainLayoutProps) {
  return (
    <ContactFormContainer>
      <Navbar />
      {children}
      <Footer marginTop={footerMarginTop} marginTopMobile={footerMarginTopMobile}>
        {footerChildren}
      </Footer>
    </ContactFormContainer>
  )
}
