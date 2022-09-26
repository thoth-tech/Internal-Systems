import { Box } from "@mui/material"
import React from "react"
import "./index.css"
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoImg from '../assets/logo.svg'
import { Dropdown } from "bootstrap";

function Home() {
  return (
    <Container>
      <Navbar className="navbar-color" bg="grey" expand="lg">
        

          <Navbar.Brand href="/">
            <StaticImage className="brandimg" width={40} src={'../assets/logo.png'} />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            Capstone
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="justify-content-end" style={{width: "100%"}}>

              <Nav.Link>
                <Button className="navlink" href="#home" variant="outline-dark">Home</Button>
              </Nav.Link>
              <Nav.Link>
                <Button className="navlink" href="#products" variant="outline-dark">Products</Button>
              </Nav.Link>
              <Nav.Link>
                <Button className="navlink" href="#getstarted" variant="outline-dark">Get Started</Button>
              </Nav.Link>

            </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="row1">
        <Col className="col1">
          <div className="block1">
            <h1 className="heading">
              Thoth Tech
            </h1>
            <br></br>
            <p className="para">One stop for all projects</p>
            
            <Button className="btn" variant="dark">
              <Box className="link" component={Link} to={'/docs'} variant='contained'>
                Explore now
              </Box>
            </Button>
            
          </div>
        </Col>
        <Col className="col2">
        <StaticImage width={500} src={'../assets/capstone.png'} />
        </Col>
      </Row>

      
      
    </Container>
  );
}
export default Home;
