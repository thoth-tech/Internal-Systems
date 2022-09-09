import {graphql} from "gatsby"
import React from "react"
import {Box} from "@mui/material";

export default function DocDetails({data}) {
  return (
    <Box sx={{
      maxWidth: '1200px',
      mx: 'auto',
    }}>
      <Box sx={{
        px: {xs: '1rem', md: '2rem', lg: '3rem'},
        background: '#F7F7FA',
        border: '1px solid #E3E5F1',
        borderRadius: '8px',
        margin: {xs: '1rem', md: '2rem 1rem'},
        boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
        "& h1,h2,h3,h4,h5,h6": {
          color: '#60679F'
        }
      }}>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
      </Box>
    </Box>
  )
}

export const query = graphql`
  query DocDetails($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
