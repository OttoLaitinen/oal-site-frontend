import * as React from "react"
import styled from "@emotion/styled"
import VisuallyHidden from "@reach/visually-hidden"

interface SocialLinkProps {
  url: string
  title: string
  children?: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = props => {
  const { url, title, children } = props

  return (
    <SocialLinkButton href={url}>
      <VisuallyHidden>{title}</VisuallyHidden>
      {children}
    </SocialLinkButton>
  )
}

const SocialLinkButton = styled.a`
  height: 3rem;
  width: 3rem;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  transition: transform 200ms;
  :hover {
    transform: rotate(-22deg);
  }
`

export default SocialLink
