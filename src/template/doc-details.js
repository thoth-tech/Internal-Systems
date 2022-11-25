import { graphql } from "gatsby"
import React from "react"
import SearchDocument from "../Components/SearchDocument"

export default function DocDetails({ data }) {
  return <SearchDocument data={data} />
}

export const query = graphql`
  query DocDetails($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
