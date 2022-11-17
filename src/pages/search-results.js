import { graphql } from "gatsby"
import React from "react"
import Search from "../Components/Search"

export default function SearchResults(props) {
  return (
    <Search data={props.data} input={props.location.state.input} />
  )
}

export const query = graphql`
  query SearchQueryHomepage {
    allFile(
      filter: {
        sourceInstanceName: { ne: "placeholder" }
        extension: { eq: "md" }
      }
    ) {
      nodes {
        relativePath
        id
      }
    }
  }
`