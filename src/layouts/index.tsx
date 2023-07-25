import './global.css'
import React, { useEffect, useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { ContactFormContainer } from '../context/contact_form'
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
