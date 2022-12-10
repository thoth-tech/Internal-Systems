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
      <Col className="on-img"><StaticImage
      className="ontrack-img"
            width={300}
            height={300}
            src={"../assets/doubtfire.png"}
            alt="capstone"
          />
          </Col>
          <div className="test">
        <h1 className="on-heading" >Ontrack</h1>
        <br></br>
        <br></br>





        <Row className="row">
          <Col className="col">
            <div className="block1">
              <h1>About Ontrack</h1>
              <br></br>
              <p><a href="https://doubtfire.io/">Ontrack</a> is an innovative Learning Management System that are designed for a skill-based course delivery model. Students will gain real experience thourgh regular practice receive rapid feedback on their work on a weekly basis. This platform is used to connect tutors and students at Deakin university as well as other universities around the world.
                </p>
                <br></br>

              <h1>What are the goals for OnTrack?</h1>
              <br></br>
              <p>The OnTrack group is to focus on the maintenance and development of Doubtfire. <a href="https://doubtfire.io/guides/overview">Doubtfire</a> is a learning management system which is used at Deakin University by both students and staff. The group has been tasked with creating new features to enhance both the teaching experience for tutors and learning experience for students.</p>
              <br></br>

              <h1>Understanding OnTrack</h1>
            <Col className="on-img"><StaticImage
            className="ontrack-img"
            width={500}
            height={500}
            src={"../assets/architecture.png"}
            alt="capstone"
          />
          </Col>
          <Col className="on-img"><StaticImage
            className="ontrack-img"
            width={500}
            height={500}
            src={"../assets/dataflow.png"}
            alt="capstone"
          />
          </Col>
          <br></br>
              <h1>Team</h1>
              <br></br>
                <li>The <a href="https://github.com/thoth-tech/doubtfire-web">frontend</a>f of this project is primarily built with TypeScript and Angular.</li><br></br>
               <li>The <a href="https://github.com/thoth-tech/doubtfire-api">backend</a> is a Ruby on Rails project.</li> <br></br>
                <li>The <a href="https://github.com/thoth-tech/doubtfire-deploy">deployment</a> of the entire software stack is done with docker to improve turnaround time and portability</li>
              <br></br>
            </div>
          </Col>
        </Row>



        <Row className="row">
          <Col className="col">
            <div className="on-btn">
            < p className="para">One stop for all projects</p>
            <Button href="https://github.com/thoth-tech" className="btn" variant="outline-dark">
              Company Github
            </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
export default Home
