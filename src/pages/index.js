// import { Box } from "@mui/material"
import React, { useState } from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import axios from "axios"

function Home() {
  const [file, setFile] = useState()

  const send = () => {
    const data = new FormData()
    data.append("file", file)
    axios
      .post("http://localhost:5000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <Container>
      <NavBar />
      <div className="test">
        <Row className="row">
          <Col className="col">
            <div className="block1">
              <h1 className="heading">Thoth Tech</h1>
              <br></br>
              <p className="para">One stop for all projects</p>
              <Button href="/docs" className="btn" variant="outline-dark">
                Explore Now
              </Button>
              <form action="#" enctype="multipart/form-data">
                <div>
                  <label htmlFor="fileUpload">File</label>
                  <input
                    type="file"
                    id="file"
                    onChange={event => {
                      const file = event.target.files[0]
                      setFile(file)
                    }}
                  />
                </div>
                <button onClick={send}>Upload</button>
              </form>
            </div>
          </Col>
          <Col className="col">
            <StaticImage
              width={450}
              src={"../assets/capstone.png"}
              alt="capstone"
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
export default Home
