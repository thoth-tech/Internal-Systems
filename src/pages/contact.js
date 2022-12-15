/*
The code follows the form submission option Getfrom on Gatsby's documentation for building a contact form.
Documentation URL: https://www.gatsbyjs.com/docs/building-a-contact-form/
*/

import React, { useState } from "react"
import { Modal, Paper, TextField, Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import SendIcon from "@mui/icons-material/Send"
import NavBar from "../Components/NavBar"
import Button from "react-bootstrap/Button"
import BGImage from "../assets/bg-contacts.png"
import Footer from "../Components/Footer"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import axios from "axios"

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [helperName, setHelperName] = useState("")
  const [helperEmail, setHelperEmail] = useState("")
  const [helperMessage, setHelperMessage] = useState("")
  const [open, setOpen] = useState(false)
  const inputType = { NAME: "name", EMAIL: "email", MESSAGE: "message" }
  const style = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    axios({
      method: "post",
      url: "https://getform.io/f/e1a6c9f3-1065-4b41-ba0b-25a9942da657",
      data: { name: name, email: email, message: message },
    })
      .then(r => {
        handleServerResponse(true, "Message submitted successfully")
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error)
      })
  }

  const handleInput = (value, type) => {
    switch (type) {
      case inputType.NAME:
        if (value.length <= 20) {
          setName(value)
          setHelperName("")
        } else setHelperName("Maximum characters reached")
        break
      case inputType.EMAIL:
        if (value.match(/.@./g)) setHelperEmail("")
        else setHelperEmail("*Please enter a proper email")
        setEmail(value)
        break
      case inputType.MESSAGE:
        if (value.length <= 300) {
          setMessage(value)
          setHelperMessage("")
        } else setHelperMessage("Maximum characters reached")
        break
      default:
        return type
    }
  }

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setName("")
      setEmail("")
      setMessage("")
      handleOpen()
    }
  }

  const modal = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Thank You! <CheckCircleIcon color="success" fontSize="large" />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your message has been successfully submitted.
        </Typography>
      </Box>
    </Modal>
  )

  return (
    <Container maxWidth="xl">
      {modal}
      <Paper
        sx={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "95vh",
        }}
      >
        <NavBar />
        <Box
          component="form"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: "5vw" }}
          onSubmit={handleSubmit}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ width: "60%", minWidth: 325 }}
          >
            <h1>Get In Touch</h1>
            <p>We're here for you, and we're wearing our thinking caps.</p>

            <TextField
              fullWidth
              required={true}
              label="Name"
              name="name"
              type="text"
              placeholder="20 characters maximum"
              color={name ? "success" : "error"}
              value={name}
              helperText={helperName}
              onChange={e => handleInput(e.target.value, inputType.NAME)}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              fullWidth
              required={true}
              label="Email"
              name="email"
              type="email"
              placeholder="Please enter correct email"
              value={email}
              helperText={helperEmail}
              color={email.match(/.@./g) ? "success" : "error"}
              onChange={e => handleInput(e.target.value, inputType.EMAIL)}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              fullWidth
              required={true}
              multiline={true}
              rows={6}
              label="Message"
              type="text"
              name="message"
              placeholder="300 characters maximum"
              color={message ? "success" : "error"}
              helperText={helperMessage}
              value={message}
              onChange={e => {
                handleInput(e.target.value, inputType.MESSAGE)
              }}
              sx={{ backgroundColor: "white" }}
            />
            <Button
              className="btn"
              type="submit"
              variant="dark"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={1}>
                <SendIcon />
                <div>Send</div>
              </Stack>
            </Button>
          </Stack>
        </Box>
      </Paper>
      <Footer />
    </Container>
  )
}

export default ContactUs
