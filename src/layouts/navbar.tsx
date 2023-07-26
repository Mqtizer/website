import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import useScrollPosition from '../hooks/useScrollPosition'
import { useContactForm } from '../context/contact_form'
const NAVIGATION_LINKS = [
  {
    name: 'Features',
    path: '/#features',
  },
  {
    name: 'FAQ',
    path: '/#faq',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
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
  z-index: 10;
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

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`

const ContactUsButton = styled.button`
  padding: 0.8rem 1.4rem;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  padding: 2rem;
  background-color: rgba(255, 253, 250, 1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  opacity: 1;
  width: 100%;
  transition: all 0.2s ease-in-out;
  box-shadow: var(--elevation-light);
  &.visible {
    opacity: 1;
    left: 0;
  }
  @media only screen and (min-width: 920px) {
    display: none;
  }
  & > button {
    width: 80%;
    margin: 0 auto;
  }
`
const HamBurger = styled.button`
  width: 40px;
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  padding: 5px;
  @media only screen and (max-width: 920px) {
    display: block;
  }

  &:hover {
    background: none;
    box-shadow: none;
  }
`
export type NavBarProps = {}

export default function Navbar({}: NavBarProps) {
  const scrollPosition = useScrollPosition()
  const [isOverlayVisible, setOverlayVisible] = useState(false)
  const { setContactModalOpen } = useContactForm()
  return (
    <NavBarContainer className={scrollPosition > 215 ? 'shadow' : ''}>
      <Logo />
      <NavLinks>
        {NAVIGATION_LINKS.map(link => (
          <StyledLink to={link.path} key={link.name} aria-label={link.name}>
            {link.name}
          </StyledLink>
        ))}
      </NavLinks>
      <HamBurger
        onClick={() => {
          setOverlayVisible(true)
        }}
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 351.67"
        >
          <path fillRule="nonzero" d="M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z" />
        </svg>
      </HamBurger>
      <ContactUsButton onClick={() => setContactModalOpen()} aria-label="Contact Us">
        Contact Us
        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.9997 12.5V15H4.99967V12.5H3.33301V15C3.33301 15.9167 4.08301 16.6667 4.99967 16.6667H14.9997C15.9163 16.6667 16.6663 15.9167 16.6663 15V12.5H14.9997ZM14.1663 9.16668L12.9913 7.99168L10.833 10.1417V3.33334H9.16634V10.1417L7.00801 7.99168L5.83301 9.16668L9.99967 13.3333L14.1663 9.16668Z"
            fill="white"
          />
        </svg> */}
      </ContactUsButton>
      <Overlay className={isOverlayVisible ? 'visible' : ''}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Logo />
          <HamBurger
            onClick={() => {
              setOverlayVisible(false)
            }}
            aria-label="Close Menu"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </HamBurger>
        </div>
        {NAVIGATION_LINKS.map(link => (
          <StyledLink
            to={link.path}
            key={link.name}
            aria-label={link.name}
            onClick={() => {
              setOverlayVisible(false)
            }}
          >
            {link.name}
          </StyledLink>
        ))}
        <button
          style={{
            width: '80%',
            margin: '0 auto',
            padding: '1rem',
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
          }}
          aria-label="Contact Us"
          onClick={() => {
            setOverlayVisible(false)
            setContactModalOpen()
          }}
        >
          Contact Us
          {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9997 12.5V15H4.99967V12.5H3.33301V15C3.33301 15.9167 4.08301 16.6667 4.99967 16.6667H14.9997C15.9163 16.6667 16.6663 15.9167 16.6663 15V12.5H14.9997ZM14.1663 9.16668L12.9913 7.99168L10.833 10.1417V3.33334H9.16634V10.1417L7.00801 7.99168L5.83301 9.16668L9.99967 13.3333L14.1663 9.16668Z"
              fill="white"
            />
          </svg> */}
        </button>
      </Overlay>
    </NavBarContainer>
  )
}
function Logo() {
  return (
    <LogoLink to="/" key="logo" aria-label="home logo">
      <StaticImage quality={100} src="../images/icon.png" alt="Logo" height={44} />
      <p>MQTIZER</p>
    </LogoLink>
  )
}
