import * as React from "react"
import styled from "styled-components"

import StyledMarkdown from "./StyledMarkdown"
import Logo from "../assets/logo.inline.svg"
import LogoWithText from "../assets/logowithtext.inline.svg"

const TopBar: React.FC = () => {
  return (
    <TopBarGrid>
      <TopBarContent>
        <StyledLogo />
      </TopBarContent>
    </TopBarGrid>
  )
}

const TopBarGrid = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.color.primaryLightest};
  backdrop-filter: blur(8px);

  z-index: 1000;
  width: 100%;
  height: ${props => props.theme.constants.topBarHeight};

  display: grid;
  grid-template-columns:
    [left-start] 1fr [middle-start] min(
      100vw,
      ${props => props.theme.contentMaxWidth}
    )
    [right-start] 1fr [right-end];

  grid-template-rows: 1fr;
`

const TopBarContent = styled.div`
  grid-column-start: middle-start;
  grid-column-end: right-start;

  display: grid;
  grid-template-columns: [logo-start] 4rem [title-start] 1fr [title-end];
  justify-items: left;
  align-items: center;
  column-gap: ${props => props.theme.spacing.small};
`

const StyledLogo = styled(LogoWithText)`
  height: 2rem;
`

export default TopBar
