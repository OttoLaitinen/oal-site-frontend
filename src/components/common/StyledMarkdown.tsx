import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "@emotion/styled"

const StyledMarkdown: React.FC<{ content: string | undefined | null }> = ({
  content,
}) => {
  return (
    <MarkdownWrapper>
      {content && (
        <ReactMarkdown
          components={components}
        >
          {content}
        </ReactMarkdown>
      )}
    </MarkdownWrapper>
  )
}

const components: {
  [nodeType: string]: React.ElementType<any>
} = {
  a: ({ children, href, ...rest }) => (
    <MarkdownLink {...rest} href={href}>
      {children}
    </MarkdownLink>
  ),
}

const MarkdownWrapper = styled.div`
  max-width: ${props => props.theme.constants.textContentWidth};

  p {
    :not(:last-child) {
      margin-bottom: ${props => props.theme.spacing.small};
    }
  }
`
const MarkdownLink = styled.a`
  ${props => props.theme.typography.body}
  font-weight: 700;
  color: ${props => props.theme.color.link};
  text-decoration: none;

  transition: box-shadow 300ms;
  :hover {
    box-shadow: 0px 2px 0px ${props => props.theme.color.link};
  }
`

export default StyledMarkdown
