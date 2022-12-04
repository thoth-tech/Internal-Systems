import React, { Component } from "react"
import { navigate } from "gatsby"
import * as JsSearch from "js-search"
import NavBar from "./NavBar"
import {
  Box,
  InputBase,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"
import { IconButton } from "gatsby-theme-material-ui"
import { Container } from "@mui/system"

class Search extends Component {
  state = {
    docList: [...this.props.data.allFile.nodes],
    search: {},
    searchResults: [],
    isLoading: true,
    searchQuery: "",
  }

  async componentDidMount() {
    this.state.docList.forEach(el => {
      el.keywords = el.relativePath.replace(/(\/|-|.md)/g, " ")
      el.title = el.relativePath.match(/[^\/]+(?=.md)/g) // eslint-disable-line
    })
    this.rebuildIndex()
  }

  rebuildIndex = () => {
    const { docList } = this.state
    const dataToSearch = new JsSearch.Search("id")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")
    dataToSearch.addIndex("keywords")
    dataToSearch.addDocuments(docList)
    this.setState({ search: dataToSearch })
  }

  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({
      searchQuery: e.target.value,
      searchResults: queryResult,
      isLoading: false,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render = () => {
    const { searchResults, searchQuery, search, isLoading } = this.state
    let queryResults = searchResults
    let queryValue = searchQuery

    if (Object.keys(search).length > 0 && isLoading) {
      queryResults = search.search(this.props.input)
      queryValue = this.props.input
    }

    return (
      <Container maxWidth="xl">
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "78%",
            }}
            onSubmit={this.handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              value={queryValue}
              fullWidth
              onChange={this.searchData}
              inputRef={input => input && input.focus()}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Container sx={{ width: "80%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography color="text.secondary" variant="body2">
              Number of results: {queryResults.length}
            </Typography>
            <List component="nav" aria-label="mailbox folders">
              {queryResults.map(item => {
                return (
                  <ListItem
                    button
                    divider
                    key={`row_${item.id}`}
                    onClick={() => navigate(`/${item.relativePath}`)}
                    sx={{ pt: 3 }}
                  >
                    <Box sx={{ flexDirection: "column" }}>
                      <Typography color="info.main" variant="subtitle1" d>
                        {`${item.title}`.toUpperCase()}
                      </Typography>
                      <Typography color="text.secondary" variant="body2" d>
                        {item.relativePath}
                      </Typography>
                    </Box>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Container>
      </Container>
    )
  }
}

export default Search
