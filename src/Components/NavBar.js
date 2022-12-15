import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { navigate } from "gatsby"
import "../pages/index.css"

const NavBar = () => {
  const windowRef = useRef("")
  const windowHref = windowRef.current
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.6),
    },
    marginLeft: 0,
    marginRight: 30,
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
        width: "25ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }))

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/search-results", { state: { input: input } })
  }

  const getInput = e => {
    input = e.target.value
  }

  const searchContent = windowHref.match(/search-results/) ? (
    ""
  ) : (
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
  )

  useEffect(() => {
    if (window) windowRef.current = window.location.href
  }, [])

  let input = ""

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
      <Navbar.Brand href="/">Capstone</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content" style={{ width: "100%" }}>
          <Nav.Link className="navlink" href="/" variant="outline-dark">
            Home
          </Nav.Link>
          <Nav.Link className="navlink" href="/product" variant="outline-dark">
            Products
          </Nav.Link>
          <Nav.Link
            className="navlink"
            variant="outline-dark"
            href="/contributors"
          >
            Contributors
          </Nav.Link>
          <Nav.Link className="navlink" variant="outline-dark" href="/upload">
            Upload
          </Nav.Link>
          <Nav.Link className="navlink" variant="outline-dark" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
        {searchContent}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
