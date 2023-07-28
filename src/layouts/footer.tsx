import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const footerSection = [
  {
    title: 'What we do',
    links: [
      {
        name: 'Features',
        link: '/#features',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Who we are',
    links: [
      {
        name: 'About Us',
        link: '/about',
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy',
      },
    ],
  },
  {
    title: 'Need Help',
    links: [
      {
        name: 'FAQ',
        link: '/#faq',
      },
      {
        name: 'Contact Us',
        link: '/contact',
      },
    ],
  },
]

const FooterSection = styled.div`
  background: #353d69;
  padding: min(calc(var(--footer-section-padding) - 4rem), 16rem) 10rem 4rem 10rem;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  @media only screen and (max-width: 920px) {
    padding: min(calc(var(--footer-section-padding-mobile) + 2rem), 18rem) 2.75rem 4rem 2.75rem;
    // padding: 18rem 2.75rem 4rem 2.75rem;
  }
  .main-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 4rem;
    .link-section-container {
      // flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .link-title {
      font-style: normal;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 300;
    }
    .link-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a {
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.75rem;
        color: #ffffff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
const GetApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  span {
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
  }
`
const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #feebcc;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      margin: 0;
      width: 52px;
      height: 52px;
      min-width: 52px;
    }
  }
  .logo-text {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.545rem;
  }
  .sub-heading {
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
  }
`
const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  span {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 120% */
    letter-spacing: 0.00938rem;
  }
`
export type FooterProps = {
  children?: React.ReactNode
  marginTop?: string
  marginTopMobile?: string
}
const FooterWrapper = styled.div`
  position: relative;
  margin-top: var(--footer-margin-top);
  @media only screen and (max-width: 768px) {
    margin-top: var(--footer-margin-top-mobile);
  }
`

export default function Footer({ children, marginTop = '16rem', marginTopMobile = '16rem' }: FooterProps) {
  return (
    <FooterWrapper
      style={{
        // @ts-ignore
        '--footer-margin-top': marginTop,
        '--footer-margin-top-mobile': marginTopMobile,
      }}
    >
      {children}
      <FooterSection
        style={{
          // @ts-ignore
          '--footer-section-padding': marginTop,
          '--footer-section-padding-mobile': marginTopMobile,
        }}
      >
        <div className="main-section">
          <BrandSection>
            <span className="logo">
              <StaticImage src="../images/icon_dark.png" alt="Logo" height={52} />
              <p className="logo-text">MQTIZER</p>
            </span>
            <span className="sub-heading">Empower Your IoT Development with Mqtizer</span>
          </BrandSection>
          {footerSection.map(section => {
            return (
              <div key={section.title} className="link-section-container">
                <span className="link-title">{section.title}</span>
                <div className="link-content">
                  {section.links.map(link => {
                    return (
                      <Link to={link.link} key={link.name}>
                        {link.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
          <GetApp>
            <span>Get the App</span>
            <Link
              to="https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en_US"
              target="blank"
            >
              <StaticImage quality={100} src="../images/google_play_white.svg" alt="Google Play" height={52} />
            </Link>
            <StaticImage quality={100} src="../images/apple_store_white.svg" alt="Apple Store" height={52} />
          </GetApp>
        </div>
        <span
          style={{
            borderTop: '1px dashed #E3E1EC',
            height: '0.06rem',
            width: '100%',
          }}
        />
        <BottomSection>
          <span>© 2023 Mqtizer. All rights reserved.</span>

          <div
            style={{
              display: 'flex',
              gap: '1.2rem',
            }}
          >
            <Link to="https://www.linkedin.com/in/sanyam-arya/" target="blank" aria-label="LinkedIn">
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="40" height="40" rx="20" fill="#FCFCFF" />
                <path
                  d="M27.7 11H13.3C12.31 11 11.5 11.81 11.5 12.8V27.2C11.5 28.19 12.31 29 13.3 29H27.7C28.69 29 29.5 28.19 29.5 27.2V12.8C29.5 11.81 28.69 11 27.7 11ZM16.9 26.3H14.2V18.2H16.9V26.3ZM15.55 16.67C14.65 16.67 13.93 15.95 13.93 15.05C13.93 14.15 14.65 13.43 15.55 13.43C16.45 13.43 17.17 14.15 17.17 15.05C17.17 15.95 16.45 16.67 15.55 16.67ZM26.8 26.3H24.1V21.53C24.1 20.81 23.47 20.18 22.75 20.18C22.03 20.18 21.4 20.81 21.4 21.53V26.3H18.7V18.2H21.4V19.28C21.85 18.56 22.84 18.02 23.65 18.02C25.36 18.02 26.8 19.46 26.8 21.17V26.3Z"
                  fill="#46464F"
                />
              </svg>
            </Link>
            <Link to="https://www.sanyamarya.com" target="blank" aria-label="Portfolio">
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="40" height="40" rx="20" fill="#FCFCFF" />
                <path
                  d="M24.86 22C24.94 21.34 25 20.68 25 20C25 19.32 24.94 18.66 24.86 18H28.24C28.4 18.64 28.5 19.31 28.5 20C28.5 20.69 28.4 21.36 28.24 22M23.09 27.56C23.69 26.45 24.15 25.25 24.47 24H27.42C26.4512 25.6683 24.9141 26.932 23.09 27.56ZM22.84 22H18.16C18.06 21.34 18 20.68 18 20C18 19.32 18.06 18.65 18.16 18H22.84C22.93 18.65 23 19.32 23 20C23 20.68 22.93 21.34 22.84 22ZM20.5 27.96C19.67 26.76 19 25.43 18.59 24H22.41C22 25.43 21.33 26.76 20.5 27.96ZM16.5 16H13.58C14.5389 14.3272 16.0748 13.0615 17.9 12.44C17.3 13.55 16.85 14.75 16.5 16ZM13.58 24H16.5C16.85 25.25 17.3 26.45 17.9 27.56C16.0786 26.9317 14.5448 25.6677 13.58 24ZM12.76 22C12.6 21.36 12.5 20.69 12.5 20C12.5 19.31 12.6 18.64 12.76 18H16.14C16.06 18.66 16 19.32 16 20C16 20.68 16.06 21.34 16.14 22M20.5 12.03C21.33 13.23 22 14.57 22.41 16H18.59C19 14.57 19.67 13.23 20.5 12.03ZM27.42 16H24.47C24.157 14.7615 23.6936 13.5659 23.09 12.44C24.93 13.07 26.46 14.34 27.42 16ZM20.5 10C14.97 10 10.5 14.5 10.5 20C10.5 22.6522 11.5536 25.1957 13.4289 27.0711C14.3575 27.9997 15.4599 28.7362 16.6732 29.2388C17.8864 29.7413 19.1868 30 20.5 30C23.1522 30 25.6957 28.9464 27.5711 27.0711C29.4464 25.1957 30.5 22.6522 30.5 20C30.5 18.6868 30.2413 17.3864 29.7388 16.1732C29.2362 14.9599 28.4997 13.8575 27.5711 12.9289C26.6425 12.0003 25.5401 11.2638 24.3268 10.7612C23.1136 10.2587 21.8132 10 20.5 10Z"
                  fill="#46464F"
                />
              </svg>
            </Link>
          </div>
        </BottomSection>
      </FooterSection>
    </FooterWrapper>
  )
}
