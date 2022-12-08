const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const fs = require("fs")
const { promisify } = require("util")
const { response } = require("express")
const { nextTick } = require("process")
const gitUpload = require("./gitUpload")
const unlinkAsync = promisify(fs.unlink)
const cors = require("cors")
const port = process.env.PORT || 5000
const publicPath = path.join(__dirname, "../", "public")

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  cors({
    origin: "http://localhost:8000",
  }),
  express.static(publicPath)
)

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"))
})

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "404.html"))
})

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
  try {
    if (req.file) {
      const file = fs.readFileSync("uploads/" + req.file.filename).toString()
      console.log(file)
      const content = Buffer.from(file, "binary").toString("base64")
      console.log(content)
      const fileName = req.file.originalname
      const fileCheck = await gitUpload.checkIfExist(fileName)

      if (fileCheck) {
        res.status(422).json({ message: "File name already exists" })
      } else {
        await gitUpload.pushToGithub(content, fileName)
        const fileCheck = await gitUpload.checkIfExist(fileName)
        if (fileCheck) {
          console.log("File successfully uploaded")
          res.status(200).json({ message: "File successfully uploaded" })
        } else {
          res.status(500).json({ message: "Error uploading file" })
        }
      }
      unlinkAsync(req.file.path)
    } else {
      res.status(500).json({ message: "No file added" })
    }
  } catch (err) {
    console.log(err)
    unlinkAsync(req.file.path)
  }
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
  console.log(publicPath)
})
