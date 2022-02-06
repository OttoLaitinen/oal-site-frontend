import * as React from "react"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"

import MenuIcon from "../assets/menu.inline.svg"
import CrossIcon from "../assets/cross.inline.svg"

const LinkList: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <VisuallyHidden>Menu</VisuallyHidden>
        {menuOpen ? <StyledCrossIcon /> : <StyledMenuIcon />}
      </MenuButton>

      <TopBarNav open={menuOpen}>
        <StyledList>
          <li>
            <TopBarLink to="/" setOpen={setMenuOpen}>
              Overview
            </TopBarLink>
          </li>
          <li>
            <TopBarLink to="/photography" setOpen={setMenuOpen}>
              Photography
            </TopBarLink>
          </li>
        </StyledList>
      </TopBarNav>
    </>
  )
}

interface TopBarLinkProps {
  to: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: string
}

const TopBarLink: React.FC<TopBarLinkProps> = ({ to, setOpen, children }) => {
  const theme = useTheme()

  return (
    <StyledLink
      to={to}
      activeStyle={{
        backgroundColor: theme.color.primary,
        color: theme.color.white,
      }}
      partiallyActive={to !== "/"}
      onClick={() => setOpen(false)}
    >
      {children}
    </StyledLink>
  )
}

const TopBarNav = styled.nav<{ open: boolean }>`
  display: flex;
  justify-content: flex-start;

  ${props => props.theme.media.phone} {
    display: ${props => (props.open ? "flex" : "none")};
    position: fixed;
    justify-content: center;
    inset: 0 0 0 0;
    height: 100vh;
    z-index: 1000;
    padding: ${props => props.theme.spacing.veryLarge}
      ${props => props.theme.spacing.regular};

    background-color: hsl(0 0% 100%);
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.regular};

  ${props => props.theme.media.phone} {
    flex-direction: column;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  background-color: none;
  color: ${props => props.theme.color.primary};

  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.regular};

  border-radius: ${props => props.theme.constants.borderRadius};

  text-decoration: none;
  font-family: "Quicksand";
  font-size: 1rem;
  font-weight: 700;

  ${props => props.theme.media.phone} {
    font-size: 1.125rem;
  }

  :hover {
    background-color: ${props => props.theme.color.primaryLight};
  }
`
const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  border: none;
  background-color: transparent;

  ${props => props.theme.media.phone} {
    display: block;
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  height: 2rem;
  color: ${props => props.theme.color.black};
`

const StyledCrossIcon = styled(CrossIcon)`
  height: 2rem;
  color: ${props => props.theme.color.black};
`

export default LinkList
