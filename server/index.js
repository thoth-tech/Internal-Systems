const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const fs = require("fs")
const base64 = require("base-64")
const { Octokit } = require("@octokit/rest")
require("dotenv").config()

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

app.post("/upload", upload.single("file"), async (req, res) => {
  const testFile = fs.readFileSync("uploads\\/" + req.file.filename).toString()
  const content = base64.encode(testFile)
  const fileName = req.file.originalname

  try {
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner: "YOUR_ACCOUNT_NAME",
      repo: "YOUR_REPOSITORY",
      path: "server/uploads/" + fileName,
      message: "uploaded file",
      content: content,
    })
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => console.log("server started on port 5000"))
