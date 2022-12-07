import React, { useState } from "react"
import { graphql } from "gatsby"
import "./index.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Grid from "@mui/material/Grid"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { Container } from "@mui/system"
import { Box, Tab, Tabs } from "@mui/material"
import ThothTech from "../assets/thoth-tech.png"
import OnTrack from "../assets/doubtfire.png"
import SplashKit from "../assets/splashkit.png"
import DreamBig from "../assets/qwert.png"
import Others from "../assets/others.png"
import HtmlTooltip from "../Components/HtmlToolTip"
import ScrollTop from "../Components/ScrollTop"

export default function Docs({ data }) {
  const docs = data.allMarkdownRemark.nodes
  const [selected, setSelected] = useState("HANDBOOK")
  const products = {
    HANDBOOK: { icon: ThothTech, keywords: ["handbook"] },
    ONTRACK: { icon: OnTrack, keywords: ["ontrack", "doubtfire"] },
    SPLASHKIT: {
      icon: SplashKit,
      keywords: ["splashkit", "skm", "games", "arcade", "machine"],
    },
    DREAMBIG: { icon: DreamBig, keywords: ["dreambig"] },
    OTHERS: { icon: Others, keywords: [] },
  }

  Object.entries(products).forEach(([key, val]) => {
    if (key !== "OTHERS")
      products.OTHERS.keywords = [...products.OTHERS.keywords, ...val.keywords]
  })

  const productsDisplay = Object.entries(products).map(([key, val]) => {
    return (
      <Tab
        key={key}
        label={key}
        value={key}
        icon={
          <Box
            component="img"
            alt={key}
            src={val.icon}
            sx={{
              width: selected === key ? "90%" : "40%",
              opacity: selected === key ? 1 : 0.4,
              transition: "300ms",
            }}
          />
        }
        sx={{ width: "25vw", maxWidth: "200px", minHeight: "27vmin" }}
      />
    )
  })

  // eslint-disable-next-line
  const docsDispaly = docs.map(doc => {
    const path = doc.fileAbsolutePath.slice(
      doc.fileAbsolutePath.indexOf("gatsby-source-git") + 18
    )
    const title = path.match(/[^\/]+(?=.md)/g) // eslint-disable-line

    const isOthers = products[selected].keywords.some(item =>
      path.toLowerCase().includes(item)
    )

    if (selected !== "OTHERS" ? isOthers : !isOthers) {
      return (
        <Grid
          item
          key={doc.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          sx={{ overflowWrap: "anywhere" }}
        >
          <Link
            to={`/${path}`}
            style={{
              textDecoration: "none",
            }}
          >
            <HtmlTooltip
              title={
                doc.html ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: doc.html,
                    }}
                  />
                ) : (
                  <h5>No Preview</h5>
                )
              }
            >
              <div className="docs">
                <div style={{ color: "#00ADB5" }}>
                  {`${title}`.toUpperCase()}
                </div>
                <div style={{ fontSize: "14px" }}>{path}</div>
              </div>
            </HtmlTooltip>
          </Link>
        </Grid>
      )
    }
  })

  const handleChange = (event, newValue) => {
    setSelected(newValue)
  }

  return (
    <Container maxWidth="xl">
      <NavBar />
      <Box display="flex" justifyContent="center" width="100%">
        <Tabs
          value={selected}
          onChange={handleChange}
          aria-label="icon label tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{ pt: "3vw" }}
        >
          {productsDisplay}
        </Tabs>
      </Box>
      <Grid container spacing={3} textAlign="center" sx={{ py: 2 }}>
        {docsDispaly}
      </Grid>
      <Footer />
      <ScrollTop />
    </Container>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        fileAbsolutePath
        id
        html
      }
    }
  }
`
