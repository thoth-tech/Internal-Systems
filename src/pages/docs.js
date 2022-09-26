import React from "react"
import "./index.css"
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby"
export default function Docs({ data }) {
  const docs = data.allFile.nodes
  return (
    <div>
      <h1>List all the docs</h1>
      <nav>
        {docs.map(doc => (

          <Button className="docs" variant="light">

            <Link key={doc.id} to={`/${doc.relativePath}`}
              style={{ display: "block" }} >

              {doc.relativePath}
              
            </Link>

          </Button>
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
