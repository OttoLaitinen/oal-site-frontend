import * as React from "react"
import styled from "styled-components"

import GitHubIcon from "../assets/github.inline.svg"
import InstagramIcon from "../assets/instagram.inline.svg"
import LinkedInIcon from "../assets/linkedin.inline.svg"
import SocialLink from "./SocialLink"

const SocialLinksList: React.FC = () => {
  return (
    <LinksFlex>
      <SocialLink
        url="https://www.instagram.com/oal.photo/"
        title="My photography Instagram account"
      >
        <InstagramIcon />
      </SocialLink>

      <SocialLink
        url="https://github.com/OttoLaitinen"
        title="My GitHub account"
      >
        <GitHubIcon />
      </SocialLink>

      <SocialLink
        url="https://www.linkedin.com/in/otto-a-laitinen/"
        title="My LinkedIn page"
      >
        <LinkedInIcon />
      </SocialLink>
    </LinksFlex>
  )
}

const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.large};
`

export default SocialLinksList
