import styled from '@emotion/styled'
import React from 'react'
import Navbar from './navbar'

interface MainLayoutProps {
  children: React.ReactNode
  openDownloadCTAClick: () => void
}
export default function MainLayout({ children, openDownloadCTAClick }: MainLayoutProps) {
  return (
    <>
      <div className="">
        <Navbar openDownloadCTAClick={openDownloadCTAClick} />
        {/* <SocialLinksContainer showEmail={false} /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )
}
