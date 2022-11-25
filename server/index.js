const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const shelljs = require("shelljs")
const path = require("path")
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
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
  shelljs.exec(`git add uploads`)
  shelljs.exec(`git commit -m "Uploaded file" `)
  shelljs.exec(`git push origin main`)
})

app.listen(port, () => console.log("server started on port 5000"))
