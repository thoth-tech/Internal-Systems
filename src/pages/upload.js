import { Container } from "@mui/material"
import React from "react"
import NavBar from "../Components/NavBar"
import UploadDocument from "../Components/UploadDocument"

const UploadDocs = () => {
  return (
    <Container maxWidth="xl">
      <NavBar />
      
      <div className="wrapper">
      <UploadDocument />
      <section class ="progress-area"></section>
      <section class ="uploaded-area"></section>
      </div>
     
     
    </Container>
  )
}

export default UploadDocs