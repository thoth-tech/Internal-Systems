const { Octokit } = require("@octokit/rest")
require("dotenv").config()
const token = process.env.TOKEN
const octokit = new Octokit({
  auth: token,
})

async function checkIfExist(fileName) {
  try {
    const result = await octokit.repos.getContent({
      owner: "Rtam22",
      repo: "Uploadtest",
      path: "uploads/" + fileName,
    })
    if (result.data.name) {
      return true
    }
  } catch (err) {
    return false
  }
}

async function pushToGithub(content, fileName) {
  try {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner: "Rtam22",
      repo: "Uploadtest",
      path: "uploads/" + fileName,
      message: "uploaded file",
      content: content,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { pushToGithub, checkIfExist }
