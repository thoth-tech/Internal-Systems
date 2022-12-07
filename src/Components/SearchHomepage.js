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
import HtmlTooltip from "./HtmlToolTip"
import ScrollTop from "./ScrollTop"

class Search extends Component {
  state = {
    docList: [...this.props.data.allMarkdownRemark.nodes],
    search: {},
    searchResults: [],
    isLoading: true,
    searchQuery: "",
  }

  async componentDidMount() {
    this.state.docList.forEach(el => {
      const path = el.fileAbsolutePath.slice(
        el.fileAbsolutePath.indexOf("gatsby-source-git") + 18
      )
      el.path = path
      el.keywords = path.replace(/(\/|-|.md)/g, " ")
      el.title = path.match(/[^\/]+(?=.md)/g) // eslint-disable-line
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
                  <HtmlTooltip
                    title={
                      item.html ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <h5>No Preview</h5>
                      )
                    }
                  >
                    <ListItem
                      button
                      divider
                      key={`row_${item.id}`}
                      onClick={() => navigate(`/${item.path}`)}
                      sx={{ pt: 3 }}
                    >
                      <Box sx={{ flexDirection: "column" }}>
                        <Typography color="info.main" variant="subtitle1" d>
                          {`${item.title}`.toUpperCase()}
                        </Typography>
                        <Typography color="text.secondary" variant="body2" d>
                          {item.path}
                        </Typography>
                      </Box>
                    </ListItem>
                  </HtmlTooltip>
                )
              })}
            </List>
          </Box>
        </Container>
        <ScrollTop />
      </Container>
    )
  }
}

export default Search
