import * as React from "react"
import styled from "@emotion/styled"

import SocialLinksList from "./common/SocialLinksList"

const Footer: React.FC = () => {
  return (
    <FooterGrid>
      <SocialLinksList />
      <p>© Otto A. Laitinen {new Date().getFullYear()}</p>
    </FooterGrid>
  )
}

const FooterGrid = styled.div`
  display: grid;
  grid-template-rows: [links-start] 1fr [cp-start] 1fr [cp-end];
  row-gap: ${props => props.theme.spacing.regular};
  justify-items: center;
  align-items: center;
`
const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.large};
`

export default Footer
