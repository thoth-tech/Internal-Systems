
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

                <Row className="row">
                    <Col className="col">
                        <div className="block1">
                           <h3>Important Links</h3>
                           <Button href="https://trello.com/b/yguKHrNL/dreambig-prototype-technical" className="btn-dark">
                            Trello Board
                           </Button>
                           <Button href="https://miro.com/app/board/o9J_l95m8TY=/" className="btn-dark">
                            Miro Board
                           </Button>
                           <Button href="https://www.figma.com/file/ccUGpRo28eDydJeHGmf6aA/prototype?node-id=511%3A185" className="btn-dark">
                            Figma
                           </Button>
                           <Button href="https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=7Hgj0IgW1UaFQBwotfRw9vGlYdsQPmdJnKHo5ZTMfjtUQ0lVM1pHMDNRQlhEMTdRUzZPN0M4N0w5VS4u&flexpane=Settings" className="btn-dark">
                            Induction Form
                           </Button>

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
                        <Button href="https://github.com/thoth-tech" className="btn company" variant="outline-dark">
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