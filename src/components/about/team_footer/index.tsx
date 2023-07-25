import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const TeamSection = styled.div`
  position: absolute;
  top: -36rem;
  @media (max-width: 768px) {
    top: -56rem;
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 2.2rem;
        height: 2.2rem;
        // background-color: #353d69;
        border-radius: 0.25rem;
        &:hover {
          box-shadow: 0.5px 0px 5px  #353d69;
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
                <Link to={member.frontmatter.linkedin} target="blank">
                  <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.4 3.5H5.6C4.445 3.5 3.5 4.445 3.5 5.6V22.4C3.5 23.555 4.445 24.5 5.6 24.5H22.4C23.555 24.5 24.5 23.555 24.5 22.4V5.6C24.5 4.445 23.555 3.5 22.4 3.5ZM9.8 21.35H6.65V11.9H9.8V21.35ZM8.225 10.115C7.175 10.115 6.335 9.275 6.335 8.225C6.335 7.175 7.175 6.335 8.225 6.335C9.275 6.335 10.115 7.175 10.115 8.225C10.115 9.275 9.275 10.115 8.225 10.115ZM21.35 21.35H18.2V15.785C18.2 14.945 17.465 14.21 16.625 14.21C15.785 14.21 15.05 14.945 15.05 15.785V21.35H11.9V11.9H15.05V13.16C15.575 12.32 16.73 11.69 17.675 11.69C19.67 11.69 21.35 13.37 21.35 15.365V21.35Z"
                      fill="#353d69"
                    />
                  </svg>
                </Link>
                <Link to={member.frontmatter.website} target="blank">
                  <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4417 15.6333H7.67667C7.39485 14.5627 7.39485 13.4373 7.67667 12.3667H10.4417C10.3697 12.9082 10.3308 13.4537 10.325 14C10.3308 14.5463 10.3697 15.0918 10.4417 15.6333ZM8.35333 10.7333H10.7333C11.0055 9.72559 11.389 8.75126 11.8767 7.82833C10.3884 8.33665 9.13602 9.36925 8.35333 10.7333ZM19.6467 10.7333C18.8578 9.36986 17.6022 8.33797 16.1117 7.82833C16.6061 8.74683 16.9861 9.72243 17.2433 10.7333M14 20.4983C14.6933 19.5132 15.2213 18.4217 15.5633 17.2667H12.4367C12.7787 18.4217 13.3067 19.5132 14 20.4983ZM14 7.49C13.3061 8.47899 12.7781 9.57447 12.4367 10.7333H15.5633C15.2219 9.57447 14.6939 8.47899 14 7.49ZM8.35333 17.2667C9.14093 18.6266 10.3915 19.6577 11.8767 20.1717C11.389 19.2487 11.0055 18.2744 10.7333 17.2667M24.5 5.83333V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H22.1667C22.7855 3.5 23.379 3.74583 23.8166 4.18342C24.2542 4.621 24.5 5.21449 24.5 5.83333ZM22.1667 14C22.1667 12.3848 21.6877 10.8058 20.7903 9.46284C19.893 8.11984 18.6175 7.0731 17.1252 6.45498C15.633 5.83687 13.9909 5.67514 12.4068 5.99025C10.8226 6.30537 9.36742 7.08317 8.22529 8.22529C7.08317 9.36742 6.30537 10.8226 5.99025 12.4068C5.67514 13.9909 5.83687 15.633 6.45498 17.1252C7.0731 18.6175 8.11984 19.893 9.46284 20.7903C10.8058 21.6877 12.3848 22.1667 14 22.1667C16.1659 22.1667 18.2432 21.3063 19.7747 19.7747C21.3063 18.2432 22.1667 16.1659 22.1667 14ZM17.675 14C17.6692 14.5463 17.6303 15.0918 17.5583 15.6333H20.3233C20.6051 14.5627 20.6051 13.4373 20.3233 12.3667H17.5583C17.6303 12.9082 17.6692 13.4537 17.675 14ZM16.1117 20.1717C17.6006 19.6592 18.8554 18.6281 19.6467 17.2667H17.2433C16.9861 18.2776 16.6061 19.2532 16.1117 20.1717ZM12.0867 12.3667C11.9125 13.4486 11.9125 14.5514 12.0867 15.6333H15.9133C15.9932 15.0924 16.0361 14.5467 16.0417 14C16.0364 13.4533 15.9935 12.9075 15.9133 12.3667H12.0867Z"
                      fill="#353d69"
                    />
                  </svg>
                </Link>
                {member.frontmatter.github && (
                  <Link to={member.frontmatter.github} target="blank">
                    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3597 3.61542C23.5045 2.76025 22.4755 2.33325 21.2715 2.33325H6.70334C5.49934 2.33325 4.47034 2.76025 3.61517 3.61542C2.76001 4.47059 2.33301 5.49959 2.33301 6.70359V21.2718C2.33301 22.4758 2.76001 23.5048 3.61517 24.3599C4.47034 25.2151 5.49934 25.6421 6.70334 25.6421H10.103C10.3247 25.6421 10.4915 25.6339 10.6035 25.6188C10.7338 25.5926 10.8514 25.5231 10.9372 25.4216C11.048 25.3049 11.104 25.1358 11.104 24.9141L11.0958 23.8816C11.0912 23.2236 11.0888 22.7033 11.0888 22.3183L10.7388 22.3789C10.5172 22.4198 10.2372 22.4373 9.89768 22.4326C9.54381 22.4261 9.19108 22.3905 8.84301 22.3264C8.47248 22.258 8.12367 22.102 7.82568 21.8714C7.51358 21.6353 7.28081 21.3098 7.15834 20.9381L7.00667 20.5881C6.87884 20.312 6.71824 20.0523 6.52834 19.8146C6.31134 19.5311 6.09084 19.3398 5.86801 19.2383L5.76301 19.1624C5.68979 19.11 5.6232 19.0489 5.56467 18.9804C5.50878 18.9169 5.46277 18.8453 5.42817 18.7681C5.39784 18.6969 5.42351 18.6386 5.50401 18.5931C5.58567 18.5464 5.73151 18.5243 5.94501 18.5243L6.24834 18.5709C6.45017 18.6106 6.70101 18.7319 6.99851 18.9338C7.29958 19.139 7.55107 19.4088 7.73467 19.7236C7.96801 20.1378 8.24801 20.4539 8.57701 20.6721C8.90601 20.8891 9.23734 20.9988 9.57101 20.9988C9.90468 20.9988 10.1928 20.9731 10.4367 20.9229C10.6725 20.8742 10.9016 20.7974 11.1192 20.6943C11.2102 20.0176 11.4575 19.4949 11.8623 19.1309C11.3378 19.0795 10.8179 18.9882 10.3072 18.8579C9.80877 18.721 9.32944 18.5223 8.88034 18.2664C8.41046 18.0106 7.99543 17.6649 7.65884 17.2491C7.33567 16.8443 7.06967 16.3134 6.86201 15.6566C6.65551 14.9986 6.55167 14.2391 6.55167 13.3793C6.55167 12.1554 6.95067 11.1136 7.74984 10.2526C7.37651 9.33325 7.41151 8.30075 7.85601 7.15859C8.15001 7.06642 8.58518 7.13525 9.16151 7.36275C9.73784 7.59025 10.1602 7.78509 10.4285 7.94609C10.6968 8.10942 10.9115 8.24592 11.0737 8.35675C12.0221 8.0928 13.0023 7.96012 13.9868 7.96242C14.989 7.96242 15.9597 8.09425 16.9012 8.35675L17.4775 7.99275C17.9208 7.72658 18.3884 7.50313 18.874 7.32542C19.4107 7.12242 19.819 7.06759 20.1037 7.15859C20.5587 8.30192 20.5983 9.33325 20.2238 10.2538C21.023 11.1136 21.4232 12.1554 21.4232 13.3804C21.4232 14.2403 21.3193 15.0021 21.1117 15.6636C20.9052 16.3263 20.6368 16.8571 20.3078 17.2573C19.9653 17.6678 19.5486 18.0101 19.0793 18.2664C18.5893 18.5394 18.1133 18.7366 17.6525 18.8579C17.1418 18.9887 16.6219 19.0803 16.0973 19.1321C16.6223 19.5871 16.886 20.3046 16.886 21.2858V24.9141C16.886 25.0856 16.9105 25.2244 16.9618 25.3306C16.9854 25.3817 17.0191 25.4276 17.0608 25.4655C17.1025 25.5034 17.1513 25.5325 17.2045 25.5511C17.3165 25.5908 17.4145 25.6164 17.5008 25.6258C17.5872 25.6374 17.7108 25.6409 17.8718 25.6409H21.2715C22.4755 25.6409 23.5045 25.2139 24.3597 24.3588C25.2137 23.5048 25.6418 22.4746 25.6418 21.2706V6.70359C25.6418 5.49959 25.2148 4.47059 24.3597 3.61542Z"
                        fill="#353d69"
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
