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

        <h1 className="heading" >Ontrack</h1>
        <br></br>
        <br></br>





        <Row className="row">
          <Col className="col">
            <div className="block1">
              <p><a href="https://doubtfire.io/">Ontrack</a> is an innovative Learning Management System that are designed for a skill-based course delivery model. Students will gain real experience thourgh regular practice receive rapid feedback on their work on a weekly basis. This platform is used to connect tutors and students at Deakin university as well as other universities around the world.
                </p>
                
                <li>The <a href="https://github.com/thoth-tech/doubtfire-web">frontend</a>f of this project is primarily built with TypeScript and Angular.</li><br></br>
               <li>The <a href="https://github.com/thoth-tech/doubtfire-api">backend</a> is a Ruby on Rails project.</li> <br></br>
                <li>The <a href="https://github.com/thoth-tech/doubtfire-deploy">deployment</a> of the entire software stack is done with docker to improve turnaround time and portability</li>
              <br></br>
            </div>
          </Col>
          <Col><StaticImage
            width={220}
            src={"../assets/doubtfire.png"}
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