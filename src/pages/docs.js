import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { StaticImage } from "gatsby-plugin-image"

import { MDBFooter } from "mdb-react-ui-kit"

// import Search from '@mui/icons-material/Search';
// import SearchIconWrapper from '@mui/icons-material/Search';
import SearchIcon from "@mui/icons-material/Search"
// import StyledInputBase from '@mui/icons-material/Search';

import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"

import Grid from "@mui/material/Grid"

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

export default function Docs({ data }) {
  const docs = data.allFile.nodes
  return (
    <div>
      <Navbar className="navbar-color" bg="grey" expand="lg">
        <Navbar.Brand href="/">
          <StaticImage
            className="brandimg"
            width={40}
            src={"../assets/logo.png"}
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Capstone</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link>
              <Button className="navlink" href="#home" variant="outline-dark">
                Home
              </Button>
            </Nav.Link>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="heading">
        <h1>List all the docs</h1>
      </div>

      <Grid container spacing={4}>
        {docs.map(doc => (
          <Grid item xs={4}>
            <Link
              key={doc.id}
              to={`/${doc.relativePath}`}
              style={{ textDecoration: "none" }}
            >
              <div className="docs">{doc.relativePath}</div>
            </Link>
          </Grid>
        ))}
      </Grid>

      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold">Thoth Tech</a>
        </div>
      </MDBFooter>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        sourceInstanceName: { ne: "placeholder" }
        extension: { eq: "md" }
      }
    ) {
      nodes {
        relativePath
        id
      }
    }
  }
`

// import React from 'react';
// import { MDBFooter } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-left'>
//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()} Copyright:{' '}
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
