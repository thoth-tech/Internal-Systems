import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Grid from "@mui/material/Grid"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { Container } from "@mui/system"

export default function Docs({ data }) {
  const docs = data.allFile.nodes
  return (
    <Container maxWidth="xl">
      <NavBar />
      <div className="heading">
        <h1
          style={{
            textAlign: "center",
            fontSize: "55px",
          }}
        >
          List all the docs
        </h1>
      </div>
      <Grid container spacing={3} textAlign="center">
        {docs.map(doc => {
          const title = doc.relativePath.match(/[^\/]+(?=.md)/g) // eslint-disable-line
          return (
            <Grid item key={doc.id} xs={12} sm={6} md={4} lg={4} xl={3}>
              <Link
                to={`/${doc.relativePath}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="docs">
                  <div style={{ color: "#00ADB5" }}>
                    {`${title}`.toUpperCase()}
                  </div>
                  <div>{doc.relativePath}</div>
                </div>
              </Link>
            </Grid>
          )
        })}
      </Grid>
      <Footer />
    </Container>
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
