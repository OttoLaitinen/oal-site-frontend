import * as React from "react"
import styled from "@emotion/styled"

import LogoWithText from "../assets/logowithtext.inline.svg"

const TopBar: React.FC = () => {
  return (
    <TopBarFlex>
      <TopBarNav>
        <StyledLogo />
      </TopBarNav>
    </TopBarFlex>
  )
}

const TopBarFlex = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.primaryLightest};
  backdrop-filter: blur(8px);

  z-index: 1000;
  width: 100%;
  height: ${props => props.theme.constants.topBarHeight};

  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: ${props => props.theme.spacing.large};

  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }
`

const TopBarNav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.small};
  justify-content: flex-start;
  align-items: center;

  width: ${props => props.theme.constants.contentMaxWidth};
`

const StyledLogo = styled(LogoWithText)`
  height: 2rem;
  ${props => props.theme.media.phone} {
    height: 1.75rem;
  }
`

export default TopBar
