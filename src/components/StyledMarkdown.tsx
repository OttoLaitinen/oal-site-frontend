import React from "react"
import ReactMarkdown from "react-markdown"

const StyledMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return <ReactMarkdown children={content} />
}

export default StyledMarkdown
