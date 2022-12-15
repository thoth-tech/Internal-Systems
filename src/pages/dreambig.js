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
            <div className="dream-h">
                <h1>Dreambig</h1>
            </div>
            <div className="dream-img">


                <StaticImage
                    width={300}
                    height={300}
                    src={"../assets/qwert.png"}
                    alt="capstone"
                />



            </div>

            <h3>Background</h3>

            <p><li>DreamBig aims to provide a personalised roadmap integrated with Ontrack to support students to develop and improve their employability after graduation. In addition, it will provide a platform to help set realistic expectations for students graduating into the real world.</li>

                <br></br>
                <li> DreamBig will be an integrated platform with Ontrack which helps contributing to student employability. This is important to Thoth Tech as we believe in providing educational resources for students.</li></p>

            <h3>Inscope</h3>
            <li>User research</li>
            <li>Design Planning and Documentation</li>
            <li>Front-end</li>
            <li>Database</li>
            <li>Security</li>
            <li>Scope of Architecture</li>
            <br></br>
            <h3>OutScope</h3>
            <li>New feature documentation</li>
            <li>Create User documentation</li>
            <br>
            </br>

            <div className="dream-link">
                <Button href="/links" className="btn" variant="outline-dark">Important Links</Button>
                <Button href="https://github.com/Arsh2607/Internal-Systems" className="btn" variant="outline-dark">Company Github</Button>
            </div>
            <br></br>




            <Footer />
        </Container>
    )
}
export default Home