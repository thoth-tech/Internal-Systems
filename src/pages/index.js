// import { Box } from "@mui/material"
import React from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import GitHubIcon from "@mui/icons-material/GitHub"
// import { CFooter } from "@coreui/react"
// import { CLink } from "@coreui/react"

// import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';

function Home() {
  return (
    <Container>
      <Navbar className="navbar-color" bg="grey" expand="lg">
        <Navbar.Brand href="/">
          <StaticImage
            className="brandimg"
            width={40}
            src={"../assets/logo.png"}
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Capstone</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link>
              <Button className="navlink" href="#home" variant="outline-dark">
                Home
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                className="navlink"
                href="#products"
                variant="outline-dark"
              >
                Products
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                className="navlink"
                href="#getstarted"
                variant="outline-dark"
              >
                Get Started
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="test">
        <Row className="row">
          <Col className="col">
            <div className="block1">
              <h1 className="heading">Thoth Tech</h1>
              <br></br>
              <p className="para">One stop for all projects</p>

              <a href="/docs">
                <Button className="btn" variant="outline-dark">
                  Explore Now
                </Button>
              </a>
            </div>
          </Col>
          <Col className="col">
            <StaticImage width={450} src={"../assets/capstone.png"} />
          </Col>
        </Row>
      </div>
      {/* <CFooter
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <CLink href="https://coreui.io">Thoth Tech</CLink>
          <span> &copy; 2022</span>
        </div>
      </CFooter> */}


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: 
        <a className='text-reset fw-bold'>
           Thoth Tech
        </a>
      </div>
    </MDBFooter>

    </Container>
  );
}
export default Home
