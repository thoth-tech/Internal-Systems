import React, { Component } from "react"
import Mark from "mark.js"
import NavBar from "./NavBar"
import { Box, Divider, InputBase, Paper, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { IconButton } from "gatsby-theme-material-ui"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

class SearchDocument extends Component {
  state = {
    queryResult: 0,
    input: "",
    instance: null,
    index: -1,
    idList: [],
  }

  async componentDidMount() {
    this.state.instance = new Mark(document.querySelector("div.context"))
    window.onkeydown = event => {
      const key = event.key
      switch (key.toUpperCase()) {
        case "ARROWDOWN":
          this.moveNext()
          break
        case "ARROWUP":
          this.movePrevious()
          break
        default:
          return
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const { instance, input } = this.state

    instance.unmark()
    instance.mark(`${input}`, {
      element: "span",
      className: "highlight",
      separateWordSearch: false,
      done: total => {
        const elements = document.querySelectorAll(".highlight")
        const ids = []

        for (let i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = "yellow"
          elements[i].id = i
          ids.push(i)
        }
        this.setState({
          idList: [...ids],
          index: -1,
          queryResult: total,
          queryNum: 0,
        })
      },
    })
  }

  getInput = e => {
    this.setState({ input: e.target.value })
  }

  moveNext = () => {
    const { idList, index } = this.state
    if (idList.length - 1 <= index) return

    const currentElement = document.getElementById(idList[index + 1])
    const previousElement = document.getElementById(idList[index])

    if (!!previousElement) previousElement.style.backgroundColor = "yellow"
    currentElement.style.backgroundColor = "orange"
    window.scrollTo({ top: currentElement.offsetTop - 200, behavior: "smooth" })
    this.setState({
      index: this.state.index + 1,
    })
  }

  movePrevious = () => {
    const { idList, index } = this.state
    if (index <= 0) return

    const currentElement = document.getElementById(idList[index - 1])
    const previousElement = document.getElementById(idList[index])

    if (!!previousElement) previousElement.style.backgroundColor = "yellow"
    currentElement.style.backgroundColor = "orange"
    window.scrollTo({ top: currentElement.offsetTop - 200, behavior: "smooth" })
    this.setState({ index: index - 1 })
  }

  render = () => {
    const { index, queryResult } = this.state
    const htmlData = this.props.data.markdownRemark.html

    const createDivider = () => {
      return (
        <Divider orientation="vertical" sx={{ borderColor: "gray" }} flexItem />
      )
    }

    const createButton = (icon, func) => {
      return (
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={func}
        >
          {icon}
        </IconButton>
      )
    }

    return (
      <>
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            py: 7,
            mr: 2,
            position: "sticky",
            top: 0,
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "40%",
              minWidth: "300px",
            }}
            onSubmit={this.handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              fullWidth
              onChange={this.getInput}
              inputRef={input => input && input.focus()}
            />
            {createButton(<SearchIcon />, this.handleSubmit)}
            {createDivider()}
            {createButton(<ArrowUpwardIcon />, this.movePrevious)}
            {createDivider()}
            {createButton(<ArrowDownwardIcon />, this.moveNext)}
            {createDivider()}
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ p: "10px" }}
            >
              {index + 1} / {queryResult}
            </Typography>
          </Paper>
        </Box>

        <div className="context">
          <div
            dangerouslySetInnerHTML={{
              __html: htmlData,
            }}
          ></div>
        </div>
      </>
    )
  }
}

export default SearchDocument
