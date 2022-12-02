import {
  Avatar,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Pagination,
  Stack,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { useEffect } from "react"
import Footer from "../Components/Footer"
import LoadingAnimation from "../Components/LoadingAnimation"
import NavBar from "../Components/NavBar"

const Contributors = () => {
  const [commits, setCommits] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [rows, setRows] = useState(10)
  const [descending, setDesending] = useState(true)
  const [sortByDate, setSortByDate] = useState(true)
  const reversedCommits = !commits ? "" : [...commits].reverse()
  const alphabeticalCommits = [...commits].sort(function (a, b) {
    var textA = a.name.toUpperCase()
    var textB = b.name.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
  const reversedAlphabeticalCommits = [...alphabeticalCommits].reverse()

  const getUsers = async () => {
    const url = "https://api.github.com/repos/thoth-tech/handbook/commits"
    const response = await fetch(url)
    const result = await response.json()

    const commitList = result.map(item => {
      const date = new Date(item.commit.author.date)

      return {
        id: item.sha,
        name: item.commit.author.name,
        date: date.toLocaleString(),
        message: item.commit.message,
        email: item.author.html_url,
        username: item.author.login,
        avatar: item.author.avatar_url,
        commit: item.html_url,
      }
    })
    setCommits(commitList)
    setPages(Math.ceil(commitList.length / rows))
  }

  const movePage = (event, page) => {
    setCurrentPage(page)
  }

  const changeRows = event => {
    const value = +event.target.value
    setRows(value)
    setPages(Math.ceil(commits.length / value))
  }

  const changeOrder = () => {
    setDesending(prevValue => !prevValue)
  }

  const changeSort = () => {
    setSortByDate(prevValue => !prevValue)
  }

  const commitsContent = !commits ? (
    <LoadingAnimation />
  ) : (
    <List
      sx={{
        width: "100%",
        maxWidth: "900px",
        bgcolor: "background.paper",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {(descending && sortByDate
        ? commits
        : !descending && sortByDate
        ? reversedCommits
        : !descending && !sortByDate
        ? alphabeticalCommits
        : reversedAlphabeticalCommits
      ).map((item, index) => {
        if (currentPage * rows > index && currentPage * rows - rows <= index)
          return (
            <Box key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="avatar" src={item.avatar} />
                </ListItemAvatar>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography color="text.primary" variant="subtitle1">
                    {item.name} (
                    <Link underline="hover" href={item.email}>
                      {item.username}
                    </Link>
                    )
                  </Typography>

                  <Typography noWrap color="text.secondary" variant="body2">
                    Date: {item.date}
                    <br />
                    Message: {item.message}
                    <br />
                    Commit:{" "}
                    <Link underline="hover" href={item.commit}>
                      {item.commit}
                    </Link>
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          )
      })}
    </List>
  )

  const rowNumber = (
    <form onChange={changeRows}>
      <span>{"Rows: "} </span>
      <select defaultValue="10">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </form>
  )

  const listOrder = (
    <form onChange={changeOrder}>
      <span>{"Order: "} </span>
      <select defaultValue={true}>
        <option value={true}>Desc ⬇</option>
        <option value={false}>Asc ⬆</option>
      </select>
    </form>
  )

  const sortBy = (
    <form onChange={changeSort}>
      <span>{"Sort by: "} </span>
      <select defaultValue={true}>
        <option value={true}>Date</option>
        <option value={false}>Name</option>
      </select>
    </form>
  )

  useEffect(() => {
    if (!commits) {
      getUsers()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth="xl">
      <NavBar />
      <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
        {commitsContent}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 2 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "black" }}
            />
          }
        >
          <Pagination count={pages} onChange={movePage} page={currentPage} />
          {rowNumber}
          {listOrder}
          {sortBy}
        </Stack>
      </Box>
      <Footer />
    </Container>
  )
}

export default Contributors
