import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { navigate } from "gatsby"
import "../pages/index.css"

const NavBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }))

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }))

  let input = ""

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/search-results", { state: { input: input } })
  }

  const getInput = e => {
    input = e.target.value
  }

  return (
    <Navbar className="navbar-color" bg="grey" expand="lg">
      <Navbar.Brand href="/">
        <StaticImage
          className="brandimg"
          width={40}
          src={"../assets/logo.png"}
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Capstone</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link className="navlink" href="#home" variant="outline-dark">
            Home
          </Nav.Link>
          <Nav.Link className="navlink" href="#products" variant="outline-dark">
            Products
          </Nav.Link>
          <Nav.Link
            className="navlink"
            href="#getstarted"
            variant="outline-dark"
          >
            Get Started
          </Nav.Link>
          <Search>
            <form onSubmit={handleSubmit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={getInput}
              />
            </form>
          </Search>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
