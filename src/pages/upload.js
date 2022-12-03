import { Container } from "@mui/material"
import React from "react"
import NavBar from "../Components/NavBar"
import UploadDocument from "../Components/UploadDocument"

const UploadDocs = () => {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <UploadDocument />
    </Container>
  )
}

export default UploadDocs
