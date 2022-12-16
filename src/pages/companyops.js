// import { Box } from "@mui/material"
import React from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

function Home() {
  return (
    <Container>
      <NavBar />
      <div className="test">
        <h1 className="heading">Company Operation</h1>
        <br></br>
        <br></br>

        <Row className="row">
          <Col className="col">
            <div className="block1">
              <p>
                Company operation is a project which provides students a website
                that will include all the information for all the capstone
                projects. It is indeed designed to serve as a primary hub where
                students can find all their information in one place. Hence, we
                require a website that is well-designed and easy to use with
                responsive design, helpful navigation and high-quality content
                and security features. Also, it should reflect our company, its
                products, services, and, eventually, its identity.
              </p>
            </div>
          </Col>
          <Col>
            <StaticImage
              width={220}
              src={"../assets/company-operation-background.png"}
              alt="company-operation"
            />
          </Col>
        </Row>

        <Row className="row">
          <Col className="col">
            <p className="para">One stop for all projects</p>
            <Button
              href="https://github.com/thoth-tech/Internal-Systems"
              className="btn"
              variant="outline-dark"
            >
              Company Github
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
export default Home
