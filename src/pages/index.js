// import { Box } from "@mui/material"
import React, { useState } from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UploadDocument from "../Components/UploadDocument"

function Home() {
  return (
    <Container>
      <NavBar />
      <div className="test">
        <Row className="row">
          <Col className="col">
            <div className="block1">
              <h1 className="heading">Thoth Tech</h1>
              <br></br>
              <p className="para">One stop for all projects</p>
              <Button href="/docs" className="btn" variant="outline-dark">
                Explore Now
              </Button>
              <UploadDocument />
            </div>
          </Col>
          <Col className="col">
            <StaticImage
              width={450}
              src={"../assets/capstone.png"}
              alt="capstone"
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
export default Home
