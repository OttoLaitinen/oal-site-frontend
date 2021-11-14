import * as React from "react"
import styled from "styled-components"

import StyledMarkdown from "./StyledMarkdown"
import Logo from "../assets/logo.inline.svg"

const TopBar: React.FC = () => {
  return (
    <TopBarGrid>
      <TopBarContent>
        <Logo />
        <h1>Otto A. Laitinen</h1>
      </TopBarContent>
    </TopBarGrid>
  )
}

const TopBarGrid = styled.div`
  display: grid;
  grid-template-columns: [left-start] 1fr [middle-start] min(80vw, 600px) [right-start] 1fr [right-end];
  grid-template-rows: 1fr;

  justify-items: center;
  align-items: center;
`
const TopBarContent = styled.div`
  grid-column-start: middle-start;
  grid-column-end: right-start;

  display: grid;
  grid-template-columns: [logo-start] 4rem [title-start] 1fr [title-end];
  justify-items: center;
  align-items: baseline;
  column-gap: ${props => props.theme.spacing.small};
`

export default TopBar
