import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const TeamSection = styled.div`
  position: absolute;
  top: -34rem;
  @media (max-width: 768px) {
    top: -60rem;
  }
  left: 10vw;
  background: #dee0ff url('/fade_team.svg') no-repeat;
  background-size: cover;
  width: 80vw;
  padding: 2.75rem 2.75rem 9rem 2.75rem;
  border-radius: 1.5rem;
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00115a;
  gap: 0.6rem;
  h2 {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.25rem;
  }
  h3 {
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.25rem;
  }
  .team {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    width: 100%;

    .member {
      width: min(600px, 33vw);
      @media (max-width: 768px) {
        width: min(600px, 80vw);
      }

      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      border-radius: 1rem;
      border: 1px solid #c6c5d0;
      background: #fcfcff;
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      .rowOne {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        h3 {
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
          color: var(--m-3-sys-light-on-surface-variant, #46464f);
          color: #191c1e;
        }
        h4 {
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.5rem;
          color: #46464f;
        }
        .image {
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 50%;
          background: #00115a;
        }
      }
      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5rem;
        color: #46464f;
      }
      a {
        &:hover {
          transform: scale(1.1);
        }
    }
  }
`

export const TeamFooter = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { kind: { eq: "team" } } }) {
        nodes {
          frontmatter {
            name
            position
            linkedin
            website
            github
            index
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
          html
        }
      }
    }
  `)
  let team = data.allMarkdownRemark.nodes as any[]

  team = team.sort((a: { frontmatter: { index: number } }, b: { frontmatter: { index: number } }) => {
    return a.frontmatter?.index - b.frontmatter?.index
  })
  return (
    <TeamSection>
      <h2>Our Team</h2>
      <h3>Small Team, Big Hearts</h3>
      <br />
      <br />
      <div className="team">
        {team.map((member: any, index: number) => {
          const featuredImg = getImage(
            member.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as any
          ) as any
          return (
            <div
              className="member"
              key={member.frontmatter.name}
              data-sal={index % 2 !== 0 ? 'slide-left' : 'slide-right'}
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="250"
            >
              <div className="rowOne">
                <GatsbyImage class="image" image={featuredImg} alt="feature image" />
                <span>
                  <h3>{member.frontmatter.name}</h3>
                  <h4>{member.frontmatter.position}</h4>
                </span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: member.html }} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  gap: '1rem',
                }}
              >
                <Link to={member.frontmatter.linkedin} target="blank" aria-label="LinkedIn">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.2 0H2.8C1.26 0 0 1.26 0 2.8V25.2C0 26.74 1.26 28 2.8 28H25.2C26.74 28 28 26.74 28 25.2V2.8C28 1.26 26.74 0 25.2 0ZM8.4 23.8H4.2V11.2H8.4V23.8ZM6.3 8.82C4.9 8.82 3.78 7.7 3.78 6.3C3.78 4.9 4.9 3.78 6.3 3.78C7.7 3.78 8.82 4.9 8.82 6.3C8.82 7.7 7.7 8.82 6.3 8.82ZM23.8 23.8H19.6V16.38C19.6 15.2601 18.62 14.28 17.5 14.28C16.38 14.28 15.4 15.2601 15.4 16.38V23.8H11.2V11.2H15.4V12.88C16.1 11.76 17.64 10.92 18.9 10.92C21.56 10.92 23.8 13.16 23.8 15.82V23.8Z"
                      fill="#353D69"
                    />
                  </svg>
                </Link>
                <Link to={member.frontmatter.website} target="blank" aria-label="Website">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.25556 16.1778H5.56889C5.19314 14.7502 5.19314 13.2498 5.56889 11.8222H9.25556C9.15964 12.5443 9.10769 13.2716 9.1 14C9.10769 14.7284 9.15964 15.4557 9.25556 16.1778ZM6.47111 9.64444H9.64444C10.0073 8.30078 10.5186 7.00168 11.1689 5.77111C9.18454 6.44887 7.51469 7.82567 6.47111 9.64444ZM21.5289 9.64444C20.4771 7.82648 18.8029 6.45063 16.8156 5.77111C17.4748 6.99578 17.9815 8.29657 18.3244 9.64444M14 22.6644C14.9244 21.351 15.6284 19.8956 16.0844 18.3556H11.9156C12.3716 19.8956 13.0756 21.351 14 22.6644ZM14 5.32C13.0749 6.63866 12.3708 8.09929 11.9156 9.64444H16.0844C15.6292 8.09929 14.9251 6.63866 14 5.32ZM6.47111 18.3556C7.52124 20.1688 9.18873 21.5436 11.1689 22.2289C10.5186 20.9983 10.0073 19.6992 9.64444 18.3556M28 3.11111V24.8889C28 25.714 27.6722 26.5053 27.0888 27.0888C26.5053 27.6722 25.714 28 24.8889 28H3.11111C2.28599 28 1.49467 27.6722 0.911223 27.0888C0.327777 26.5053 0 25.714 0 24.8889V3.11111C0 2.28599 0.327777 1.49467 0.911223 0.911223C1.49467 0.327777 2.28599 0 3.11111 0H24.8889C25.714 0 26.5053 0.327777 27.0888 0.911223C27.6722 1.49467 28 2.28599 28 3.11111ZM24.8889 14C24.8889 11.8464 24.2503 9.74113 23.0538 7.95046C21.8573 6.15979 20.1567 4.76413 18.167 3.93998C16.1773 3.11582 13.9879 2.90019 11.8757 3.32034C9.76345 3.74049 7.82323 4.77755 6.30039 6.30039C4.77755 7.82323 3.74049 9.76345 3.32034 11.8757C2.90019 13.9879 3.11582 16.1773 3.93998 18.167C4.76413 20.1567 6.15979 21.8573 7.95046 23.0538C9.74113 24.2503 11.8464 24.8889 14 24.8889C16.8879 24.8889 19.6575 23.7417 21.6996 21.6996C23.7417 19.6575 24.8889 16.8879 24.8889 14ZM18.9 14C18.8923 14.7284 18.8404 15.4557 18.7444 16.1778H22.4311C22.8069 14.7502 22.8069 13.2498 22.4311 11.8222H18.7444C18.8404 12.5443 18.8923 13.2716 18.9 14ZM16.8156 22.2289C18.8008 21.5456 20.4739 20.1708 21.5289 18.3556H18.3244C17.9815 19.7034 17.4748 21.0042 16.8156 22.2289ZM11.4489 11.8222C11.2167 13.2648 11.2167 14.7352 11.4489 16.1778H16.5511C16.6576 15.4566 16.7148 14.729 16.7222 14C16.7152 13.271 16.6581 12.5434 16.5511 11.8222H11.4489Z"
                      fill="#353D69"
                    />
                  </svg>
                </Link>
                {member.frontmatter.github && (
                  <Link to={member.frontmatter.github} target="blank" aria-label="GitHub">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.4598 1.54022C25.4325 0.512939 24.1964 0 22.7501 0H5.24991C3.80359 0 2.5675 0.512939 1.54022 1.54022C0.512939 2.5675 0 3.80359 0 5.24991V22.7501C0 24.1964 0.512939 25.4325 1.54022 26.4598C2.5675 27.4871 3.80359 28 5.24991 28H9.3338C9.60008 28 9.80049 27.9902 9.93503 27.972C10.0916 27.9406 10.2329 27.8571 10.3359 27.7351C10.469 27.595 10.5363 27.3918 10.5363 27.1255L10.5265 25.8852C10.5208 25.0947 10.518 24.4697 10.518 24.0072L10.0976 24.0801C9.83132 24.1291 9.49497 24.1502 9.08714 24.1446C8.66206 24.1367 8.23833 24.094 7.82021 24.017C7.37511 23.9348 6.9561 23.7474 6.59813 23.4704C6.22322 23.1868 5.9436 22.7957 5.79649 22.3493L5.61429 21.9288C5.46073 21.5972 5.26781 21.2852 5.03969 20.9996C4.77902 20.6591 4.51414 20.4292 4.24646 20.3073L4.12033 20.2162C4.03237 20.1532 3.95237 20.0798 3.88208 19.9976C3.81493 19.9213 3.75966 19.8353 3.7181 19.7425C3.68167 19.657 3.7125 19.587 3.8092 19.5323C3.9073 19.4762 4.08249 19.4496 4.33896 19.4496L4.70334 19.5057C4.94579 19.5533 5.24711 19.6991 5.60448 19.9415C5.96615 20.1881 6.26826 20.5122 6.48881 20.8903C6.76911 21.3879 7.10546 21.7677 7.50068 22.0297C7.89589 22.2904 8.29391 22.4221 8.69473 22.4221C9.09555 22.4221 9.44171 22.3913 9.73462 22.331C10.0179 22.2725 10.2931 22.1803 10.5545 22.0564C10.6638 21.2435 10.9609 20.6156 11.4472 20.1784C10.8171 20.1166 10.1926 20.007 9.57906 19.8504C8.98034 19.686 8.40454 19.4473 7.86506 19.1399C7.30061 18.8326 6.80205 18.4174 6.39772 17.9178C6.00951 17.4315 5.68997 16.7938 5.44051 16.0048C5.19245 15.2144 5.06772 14.302 5.06772 13.2691C5.06772 11.799 5.54702 10.5475 6.50703 9.51319C6.05856 8.40883 6.10061 7.16853 6.63457 5.79649C6.98774 5.68577 7.51049 5.76846 8.20281 6.04174C8.89514 6.31503 9.40247 6.54908 9.72481 6.74248C10.0471 6.93869 10.305 7.10266 10.4998 7.2358C11.6392 6.91872 12.8166 6.75934 13.9993 6.7621C15.2032 6.7621 16.3692 6.92047 17.5002 7.2358L18.1925 6.79854C18.725 6.4788 19.2867 6.21038 19.8701 5.9969C20.5147 5.75304 21.0053 5.68717 21.3472 5.79649C21.8938 7.16993 21.9414 8.40883 21.4916 9.51459C22.4516 10.5475 22.9323 11.799 22.9323 13.2705C22.9323 14.3034 22.8075 15.2186 22.5581 16.0132C22.31 16.8092 21.9877 17.4469 21.5925 17.9276C21.181 18.4208 20.6804 18.832 20.1167 19.1399C19.5281 19.4678 18.9563 19.7047 18.4027 19.8504C17.7893 20.0075 17.1647 20.1176 16.5346 20.1798C17.1652 20.7264 17.482 21.5883 17.482 22.7669V27.1255C17.482 27.3315 17.5114 27.4983 17.5731 27.6258C17.6014 27.6872 17.6418 27.7424 17.6919 27.7879C17.742 27.8334 17.8007 27.8683 17.8646 27.8907C17.9991 27.9383 18.1168 27.9692 18.2205 27.9804C18.3242 27.9944 18.4728 27.9986 18.6662 27.9986H22.7501C24.1964 27.9986 25.4325 27.4857 26.4598 26.4584C27.4857 25.4325 28 24.195 28 22.7487V5.24991C28 3.80359 27.4871 2.5675 26.4598 1.54022Z"
                        fill="#353D69"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </TeamSection>
  )
}
