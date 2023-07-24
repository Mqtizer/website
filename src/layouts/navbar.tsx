import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import useScrollPosition from '../hooks/useScrollPosition'
const NAVIGATION_LINKS = [
  {
    name: 'Features',
    path: '/#features',
  },
  {
    name: 'FAQ & Support',
    path: '/#faq',
  },
]

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.00938rem;
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 3.5vw;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: rgba(255, 253, 250, 0.9);
  background-filter: blur(20px);
  &.shadow {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    margin: 0;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
  }
`
export type NavBarProps = {
  openDownloadCTAClick: () => void
}

export default function Navbar({ openDownloadCTAClick }: NavBarProps) {
  const scrollPosition = useScrollPosition()
  return (
    <NavBarContainer className={scrollPosition > 215 ? 'shadow' : ''}>
      <LogoLink to="/" key="logo">
        <StaticImage quality={100} src="../images/icon.png" alt="Logo" height={44} />
        <p>MQTIZER</p>
      </LogoLink>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {NAVIGATION_LINKS.map(link => (
          <StyledLink to={link.path} key={link.name}>
            {link.name}
          </StyledLink>
        ))}
      </div>
      <button onClick={() => openDownloadCTAClick()}>
        Download
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.9997 12.5V15H4.99967V12.5H3.33301V15C3.33301 15.9167 4.08301 16.6667 4.99967 16.6667H14.9997C15.9163 16.6667 16.6663 15.9167 16.6663 15V12.5H14.9997ZM14.1663 9.16668L12.9913 7.99168L10.833 10.1417V3.33334H9.16634V10.1417L7.00801 7.99168L5.83301 9.16668L9.99967 13.3333L14.1663 9.16668Z"
            fill="white"
          />
        </svg>
      </button>
    </NavBarContainer>
  )
}
