import React, { Component } from "react"
import Mark from "mark.js"
import "./SearchDocument.css"

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

    if (!!previousElement) previousElement.className = "highlight"
    currentElement.className = "selected"
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

    if (!!previousElement) previousElement.className = "highlight"
    currentElement.className = "selected"
    window.scrollTo({ top: currentElement.offsetTop - 200, behavior: "smooth" })
    this.setState({ index: index - 1 })
  }

  render = () => {
    const { index, queryResult } = this.state
    const htmlData = this.props.data.markdownRemark.html

    return (
      <>
        <div className={"search-bar"}>
          <form onSubmit={this.handleSubmit}>
            <br />
            <label htmlFor="Search">Enter your search here</label>
            <input
              placeholder="Enter your search here"
              onChange={this.getInput}
              ref={ref => ref && ref.focus()}
            />
            <button>Submit</button>
          </form>
          <button onClick={this.movePrevious}>-</button>
          <button onClick={this.moveNext}>+</button>
          <p>
            Number of results: {index + 1} / {queryResult}
          </p>
        </div>
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
