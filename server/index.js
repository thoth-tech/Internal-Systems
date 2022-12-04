const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const fs = require("fs")
const { Octokit } = require("@octokit/rest")
require("dotenv").config()
const { promisify } = require("util")
const { response } = require("express")
const { nextTick } = require("process")
const unlinkAsync = promisify(fs.unlink)
const token = process.env.TOKEN
const octokit = new Octokit({
  auth: token,
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = 5000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    if (ext !== ".md") {
      return cb(new Error("Markdown files only.."))
    }
    cb(null, true)
  },
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

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const testFile = fs
      .readFileSync("uploads\\/" + req.file.filename)
      .toString()
    const content = btoa(unescape(encodeURIComponent(testFile)))
    const fileName = req.file.originalname

    let fileCheck = await checkIfExist(fileName)
    console.log(fileCheck)
    if (fileCheck) {
      console.log("File name already exists")
      res.status(500).json({ message: "File name already exists" })
    } else {
      console.log("Pushing file to github")
      await pushToGithub(content, fileName)
    }
  } catch (err) {
    console.log(err)
    unlinkAsync(req.file.path)
  }
  unlinkAsync(req.file.path)
})

app.listen(port, () => console.log("server started on port 5000"))
