import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "@emotion/styled"

const StyledMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <MarkdownWrapper>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownWrapper>
  )
}

const MarkdownWrapper = styled.div`
  max-width: ${props => props.theme.constants.textContentWidth};

  p {
    :not(:last-child) {
      margin-bottom: ${props => props.theme.spacing.small};
    }
  }
`

export default StyledMarkdown
