import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Search from "../Components/SearchHomepage"

export default function SearchResults(props) {
  const [input, setInput] = useState("")

  useEffect(() => {
    const state = props.location.state
    if (!!state) setInput(state.input)
    // eslint-disable-next-line
  }, [])

  return <Search data={props.data} input={input} />
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
