import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const footerSection = [
  {
    title: 'Resources',
    links: [
      {
        name: 'Features',
        link: '/#features',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Case Study',
        link: 'https://www.behance.net/gallery/178084495/MQTIZER-App',
        newWindow: true,
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
  gap: 1.4rem;
`
const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #feebcc;
  max-width: 350px;

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
              <StaticImage placeholder="blurred" src="../images/icon_dark.png" alt="Logo" height={52} />
              <p className="logo-text">MQTIZER</p>
            </span>
            <span className="sub-heading">Your appetizer for mqtt</span>
          </BrandSection>
          {footerSection.map(section => {
            return (
              <div key={section.title} className="link-section-container">
                <span className="link-title">{section.title}</span>
                <div className="link-content">
                  {section.links.map(link => {
                    return (
                      <Link to={link.link} key={link.name} target={link.newWindow ? 'blank' : ''}>
                        {link.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
          <GetApp>
            <span className="link-title">Get the App</span>
            <Link
              to="https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en_US"
              target="blank"
            >
              <StaticImage
                placeholder="blurred"
                quality={100}
                src="../images/google_play_white.svg"
                alt="Google Play"
                height={36}
              />
            </Link>
            <Link to="https://apps.apple.com/de/app/mqtizer/id6475204816?l=en-GB" target="blank">
              <StaticImage
                placeholder="blurred"
                quality={100}
                src="../images/apple_store_white.svg"
                alt="Apple Store"
                height={36}
              />
            </Link>
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
            <Link
              to="https://t.me/+SwuMzkuVfUWmExvA"
              target="blank"
              aria-label="Portfolio"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: '#ffffff',
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: '1.5rem',
              }}
            >
              Join Our Telegram Channel
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="40" height="40" rx="8" fill="#F0F1F3" />
                <g clip-path="url(#clip0_1083_23554)">
                  <path
                    d="M20.5 6C16.7878 6 13.2244 7.47591 10.6016 10.1005C7.97604 12.7261 6.50073 16.2869 6.5 20C6.5 23.7115 7.97656 27.275 10.6016 29.8995C13.2244 32.5241 16.7878 34 20.5 34C24.2122 34 27.7756 32.5241 30.3984 29.8995C33.0234 27.275 34.5 23.7115 34.5 20C34.5 16.2885 33.0234 12.725 30.3984 10.1005C27.7756 7.47591 24.2122 6 20.5 6Z"
                    fill="url(#paint0_linear_1083_23554)"
                  />
                  <path
                    d="M12.837 19.8521C16.9189 18.0741 19.6401 16.9018 21.0007 16.3354C24.8901 14.7182 25.6973 14.4373 26.2245 14.4278C26.3404 14.426 26.5985 14.4546 26.767 14.5908C26.907 14.7056 26.9464 14.8609 26.966 14.97C26.9835 15.0789 27.0076 15.3272 26.9879 15.521C26.7779 17.7348 25.8657 23.1068 25.402 25.5864C25.2073 26.6355 24.8201 26.9872 24.446 27.0216C23.6323 27.0964 23.0154 26.4843 22.2279 25.9683C20.9964 25.1605 20.3007 24.6578 19.1042 23.8696C17.7217 22.9587 18.6186 22.458 19.4061 21.6399C19.6117 21.4257 23.1948 18.1675 23.2626 17.8719C23.2714 17.835 23.2801 17.6971 23.197 17.6245C23.1161 17.5517 22.9957 17.5766 22.9082 17.5963C22.7836 17.6243 20.817 18.9254 17.002 21.4995C16.4442 21.8831 15.9389 22.0702 15.4839 22.0603C14.9851 22.0496 14.0226 21.7777 13.3073 21.5454C12.4323 21.2604 11.7345 21.1096 11.7957 20.6256C11.8264 20.3736 12.1742 20.1156 12.837 19.8521Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1083_23554"
                    x1="1406.5"
                    y1="6"
                    x2="1406.5"
                    y2="2806"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                  <clipPath id="clip0_1083_23554">
                    <rect width="28" height="28" fill="white" transform="translate(6.5 6)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </BottomSection>
      </FooterSection>
    </FooterWrapper>
  )
}
