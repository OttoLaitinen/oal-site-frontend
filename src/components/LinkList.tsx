import * as React from "react"
import styled from "@emotion/styled"
import { string } from "prop-types"
import { useTheme } from "@emotion/react"
import { Link } from "gatsby"

const LinkList: React.FC = () => {
  return (
    <StyledList>
      <li>
        <TopBarLink to="/">Overview</TopBarLink>
      </li>
      <li>
        <TopBarLink to="/photography">Photography</TopBarLink>
      </li>
    </StyledList>
  )
}

interface TopBarLinkProps {
  to: string
  children: string
}

const TopBarLink: React.FC<TopBarLinkProps> = ({ to, children }) => {
  const theme = useTheme()

  return (
    <StyledLink
      to={to}
      activeStyle={{
        backgroundColor: theme.color.primary,
        color: theme.color.white,
      }}
    >
      {children}
    </StyledLink>
  )
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.regular};
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

  :hover {
    background-color: ${props => props.theme.color.primaryLight};
  }
`

export default LinkList
