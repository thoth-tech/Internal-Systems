import React from "react"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { Grid, Paper, Typography } from "@mui/material"
import Button from "react-bootstrap/Button"
import { Container, Stack } from "@mui/system"
import BGImage from "../assets/bg-image.png"
import GitHubIcon from "@mui/icons-material/GitHub"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"

function Home() {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <Paper
        sx={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <Grid
          container
          display="flex"
          spacing={2}
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          sx={{ pt: "20vmin" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 500 }}>
              Thoth Tech
            </Typography>
          </Grid>
          <Grid item xs={9} sm={5}>
            <Typography variant="body1" gutterBottom>
              Thoth Tech is founded on February 21st, 2022. Our mission is to
              build, operate and deploy world class education technologies. We
              are proud to create tools that enhance education outcomes by
              empowering students, connecting them with tutors and facilitating
              personalised learning experiences.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                href="https://github.com/thoth-tech"
                className="btn"
                variant="dark"
              >
                <Stack direction="row" spacing={1}>
                  <GitHubIcon />
                  <div>GitHub</div>
                </Stack>
              </Button>
              <Button href="/docs" className="btn" variant="outline-dark">
                <Stack direction="row" spacing={1}>
                  <LibraryBooksIcon />
                  <div>Handbook</div>
                </Stack>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </Container>
  )
}
export default Home
