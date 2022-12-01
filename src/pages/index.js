import React from "react"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UploadDocument from "../Components/UploadDocument"
import { Box, Divider, Grid, Typography } from "@mui/material"
import Button from "react-bootstrap/Button"
import capstone from "../assets/capstone.png"

function Home() {
  return (
    <>
      <NavBar />
      <Grid
        container
        display="flex"
        spacing={2}
        alignItems="center"
        sx={{ minHeight: "80vh" }}
      >
        <Grid item sm={12} md={4}>
          <Box sx={{ width: "100%", pl: "5vw" }}>
            <Typography variant="h3" gutterBottom>
              Thoth Tech
            </Typography>
            <Typography variant="body2" gutterBottom>
              One stop for all project
            </Typography>

            <Button href="/docs" className="btn" variant="outline-dark">
              Explore Now
            </Button>
            <Divider sx={{ my: 3 }} />
            <UploadDocument />
          </Box>
        </Grid>
        <Grid item sm={12} md={8} textAlign="center">
          <Box
            component="img"
            alt="capstone"
            src={capstone}
            sx={{ maxWidth: "90%" }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Footer />
      </Box>
    </>
  )
}
export default Home
