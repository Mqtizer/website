import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { useContactForm } from '../context/contact_form'
import useScrollPosition from '../hooks/useScrollPosition'
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
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.00938rem;
  position: relative;
  padding: 0.5rem 0.25rem;

  &:hover,
  &:focus-visible {
    text-shadow: 0px 0px 1px #191c1e;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #353d69;
    transition: width 0.3s ease;
  }

  &:hover:after,
  &:focus-visible:after {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid #353d69;
    outline-offset: 4px;
    border-radius: 4px;
  }
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
  background-color: rgba(255, 253, 250, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &.shadow {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background-color: rgba(255, 253, 250, 0.95);
  }
`
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid #353d69;
    outline-offset: 4px;
    border-radius: 4px;
  }

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
  gap: 2.5rem;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`

const ContactUsButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(53, 61, 105, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(53, 61, 105, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(53, 61, 105, 0.1);
  }

  &:focus-visible {
    outline: 2px solid #191c1e;
    outline-offset: 2px;
  }

  @media only screen and (max-width: 920px) {
    display: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: rgba(255, 253, 250, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  opacity: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition:
    left 0.3s ease,
    opacity 0.3s ease;

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
  width: 44px;
  height: 44px;
  border: none;
  background-color: rgba(53, 61, 105, 0.08);
  cursor: pointer;
  display: none;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(53, 61, 105, 0.15);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid #353d69;
    outline-offset: 2px;
    background-color: rgba(53, 61, 105, 0.2);
  }

  @media only screen and (max-width: 920px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: #353d69;
    stroke-width: 2.5;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`

const MobileMenuButton = styled(StyledLink)`
  font-size: 1.75rem;
  text-align: center;
  padding: 0.75rem;

  &:after {
    height: 3px;
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
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </HamBurger>
      <ContactUsButton onClick={() => setContactModalOpen()} aria-label="Contact Us">
        Contact Us
      </ContactUsButton>
      <Overlay className={isOverlayVisible ? 'visible' : ''}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '1rem',
            padding: '0.5rem 0',
          }}
        >
          <Logo />
          <HamBurger
            onClick={() => {
              setOverlayVisible(false)
            }}
            aria-label="Close Menu"
            style={{
              backgroundColor: 'rgba(53, 61, 105, 0.12)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </HamBurger>
        </div>
        {NAVIGATION_LINKS.map(link => (
          <MobileMenuButton
            to={link.path}
            key={link.name}
            aria-label={link.name}
            onClick={() => {
              setOverlayVisible(false)
            }}
          >
            {link.name}
          </MobileMenuButton>
        ))}
        <button
          style={{
            width: '80%',
            margin: '0 auto',
            padding: '1.2rem',
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '600',
            marginTop: '1rem',
          }}
          aria-label="Contact Us"
          onClick={() => {
            setOverlayVisible(false)
            setContactModalOpen()
          }}
        >
          Contact Us
        </button>
      </Overlay>
    </NavBarContainer>
  )
}

function Logo() {
  return (
    <LogoLink to="/" key="logo" aria-label="home logo">
      <StaticImage placeholder="blurred" quality={100} src="../images/icon.png" alt="Logo" height={44} />
      <p>MQTIZER</p>
    </LogoLink>
  )
}
