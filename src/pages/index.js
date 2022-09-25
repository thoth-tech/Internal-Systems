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

      <Box sx={{
        mt: "5rem",
        px: "2rem",
      }}>
        {/* Top Heading */}
        <Box component={'h1'} sx={{
          fontSize: '3rem'
        }}>
          Thoth Tech
        </Box>
        <Box sx={{
          fontSize: '1.2rem',
        }}>
          One step for all projects
        </Box>
        <Box sx={{
          mt: "2rem"
        }}>
        <Box component={Link} to={'/docs'} sx={{
            background: "#000",
            color: '#fff',
            padding: '8px 1rem',
            fontSize: '1.2rem',
            textDecoration: "none",
            borderRadius: '12px',
            "&hover": {
              background: "#000"
            }
          }} variant='contained'>
            Explore Docs
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
