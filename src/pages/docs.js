import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Grid from "@mui/material/Grid"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UploadDocument from "../Components/UploadDocument"

export default function Docs({ data }) {
  const docs = data.allFile.nodes
  return (
    <>
      <NavBar />
      <div className="heading">
        <h1>List all the docs</h1>
      </div>
      <Grid container spacing={4}>
        {docs.map(doc => (
          <Grid key={doc.id} item xs={4}>
            <Link
              to={`/${doc.relativePath}`}
              style={{ textDecoration: "none" }}
            >
              <div className="docs">{doc.relativePath}</div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
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
