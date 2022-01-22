import * as React from "react"
import styled from "@emotion/styled"

import LogoWithText from "../assets/logowithtext.inline.svg"
import { Link } from "gatsby"
import LinkList from "./LinkList"

const TopBar: React.FC = () => {
  return (
    <TopBarBackground>
      <Header>
        <TopBarNav>
          <LogoLinkWrapper to="/">
            <StyledLogo />
          </LogoLinkWrapper>
          <LinkList />
        </TopBarNav>
      </Header>
    </TopBarBackground>
  )
}

const TopBarBackground = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.primaryLightest};
  backdrop-filter: blur(8px);

  z-index: 1000;
  width: 100%;
  height: ${props => props.theme.constants.topBarHeight};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.header`
  margin: 0 auto;
  width: min(${props => props.theme.constants.contentMaxWidth}, 100%);
  padding-inline: ${props => props.theme.spacing.large};

  ${props => props.theme.media.phone} {
    padding-inline: ${props => props.theme.spacing.regular};
  }
`

const TopBarNav = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 100%;
  gap: ${props => props.theme.spacing.veryLarge};
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled(LogoWithText)`
  height: 2rem;
  ${props => props.theme.media.phone} {
    height: 1.75rem;
  }
`
const LogoLinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default TopBar
