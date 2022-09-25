import { graphql, Link } from "gatsby"
import React from "react"

export default function Docs({ data }) {
  const docs = data.allFile.nodes
  return (
    <div>
      <h1>List all the docs</h1>
      <nav>
        {docs.map(doc => (
          <Link
            key={doc.id}
            to={`/${doc.relativePath}`}
            style={{ display: "block" }}
          >
            {doc.relativePath}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
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
