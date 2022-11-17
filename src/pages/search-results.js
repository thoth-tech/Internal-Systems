import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Search from "../Components/Search"

export default function SearchResults(props) {
  const [input, setInput] = useState("")
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getUserInput()
  }, [])

  const getUserInput = () => {
    try {
      setInput(props.location.state.input)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  if (isLoading) return <Search data={props.data} input={""} />

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
