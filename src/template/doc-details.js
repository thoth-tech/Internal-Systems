import { graphql } from "gatsby"
import React from "react"

export default function DocDetails({ data }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}

export const query = graphql`
  query DocDetails($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
