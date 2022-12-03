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

                <h1 className="heading" >Splashkit</h1>
                <br></br>
                <br></br>





                <Row className="row">
                    <Col className="col">
                        <div className="block1">
                            <p><a href="https://splashkit.io/">Splashkit</a>  SplashKit is a C++ Software Development Kit. It is a beginner-friendly abstraction over SDL and many other libraries to assist in introductory programming education, and can be used to create 2D games.
                            </p>

                        </div>
                    </Col>
                    <Col><StaticImage
                        width={220}
                        src={"../assets/splashkit.png"}
                        alt="capstone"
                    />
                    </Col>

                </Row>

                <Row className="row">
                    <Col className="col">
                        < p className="para">One stop for all projects</p>
                        <Button href="https://github.com/thoth-tech" className="btn" variant="outline-dark">
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