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

function AutoLayoutExample() {
  return (
    <Container>
      <NavBar />

      <h1 className="heading" >Our Products</h1>
      <br></br>
      <br></br>
      <div className="test1">

        <Row className="row">
          <Col>
            <a href="/ontrack"><StaticImage className="p-img"
              width={220}
              src={"../assets/doubtfire.png"}
              alt="capstone"
            /></a>
          </Col>
          <Col className="col">
            <div className="block1">
              <a href="/ontrack"><h2 className="heading">Ontrack</h2></a>
              <br></br>
            </div>
          </Col>


        </Row>

        <Row className="row">

          <Col>
            <a href="/splashkit"> <StaticImage className="p-img"
              width={220}
              src={"../assets/splashkit.png"}
              alt="capstone" href="/splashkit"
            /></a>
          </Col>
          <Col className="col">
            <div className="block1">
              <a href="/splashkit"><h2 className="heading">Splashkit</h2></a>
              <br></br>
            </div>
          </Col>

        </Row>
        <Row className="row">

          <Col>
            <a href="/dreambig">  <StaticImage className="p-img"
              width={220}
              src={"../assets/qwert.png"}
              alt="capstone"
            /></a>

          </Col>
          <Col className="col">
            <div className="block1">
              <a href="/dreambig"><h2 className="heading">Dreambig</h2></a>
              <br></br>
            </div>
          </Col>

        </Row>
        <Row className="row">
          <Col className="col">
            <a href="/companyops"> <StaticImage className="p-img"
              width={220}
              src={"../assets/company-operation-background.png"}
              alt="companyoperation"
            /></a>
            <br></br>



          </Col>
          <Col>
            <div className="block1">
              <a href="/companyops"><h2 className="heading">Company-Operation</h2></a>
              <br></br>
            </div>

          </Col>

        </Row>


      </div>
      <Row className="row">
        <Col className="col">
          < p className="para">One stop for all projects</p>
          <Button href="https://github.com/thoth-tech" className="btn" variant="outline-dark">
            Company Github
          </Button>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}
export default AutoLayoutExample;
