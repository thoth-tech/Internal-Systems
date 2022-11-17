import React, { Component } from "react"
import { Link } from "gatsby"
import * as JsSearch from "js-search"

class Search extends Component {
  state = {
    docList: [...this.props.data.allFile.nodes],
    search: {},
    searchResults: [],
    isLoading: true,
    searchQuery: this.props.input || "",
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

    if (Object.keys(search).length > 0 && isLoading)
      queryResults = search.search(this.props.input)

    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Search">Enter your search here</label>
          <input
            value={searchQuery}
            onChange={this.searchData}
            ref={ref => ref && ref.focus()}
            placeholder="Enter your search here"
          />
        </form>
        Number of results: {queryResults.length}
        <hr/>
        
        {queryResults.map(item => {
          return (
            <div key={`row_${item.id}`}>
              <Link to={`/${item.relativePath}`}>{item.title}</Link>
              <br/>
              <label>{item.relativePath}</label>
              <hr />
            </div>
          )
        })}

        
      </div>
    )
  }
}

export default Search
