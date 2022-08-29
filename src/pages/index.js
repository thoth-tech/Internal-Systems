import { Box } from "@mui/material"
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import LogoImg from '../assets/logo.svg'

export default function Home() {
  return (
    <Box sx={{
      maxWidth: "1200px",
      mx: 'auto',
    }}>
      {/* Top Header */}
      <Box sx={{ display: 'flex', gridGap: '1rem', pt: '1.5rem' }}>
        <StaticImage width={60} src={'../assets/logo.png'} />
        <Box component='header' sx={{
          fontWeight: 'bold',
          fontSize: "2.2rem",
          fontFamily: "sans-serif",
          px: '1rem'
        }}>
          Capstone
        </Box>
      </Box>

      

    </Box>
  )
}
