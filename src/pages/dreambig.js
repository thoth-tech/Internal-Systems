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

                <h1 className="heading" >Dreambig</h1>
                <br></br>
                <br></br>





                <Row className="row">
                    <Col className="col">
                        <div className="block1">
                            <p>DreamBig aims to provide a personalised roadmap integrated with Ontrack to support students to develop and improve their employability after graduation. In addition, it will provide a platform to help set realistic expectations for students graduating into the real world.

                                DreamBig will be an integrated platform with Ontrack which helps contributing to student employability. This is important to Thoth Tech as we believe in providing educational resources for students.


                            </p>

                        </div>
                    </Col>
                    <Col><StaticImage
                        width={220}
                        src={"../assets/qwert.png"}
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