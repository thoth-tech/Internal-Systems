const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// const simpleGit = require("simple-git")
const shelljs = require("shelljs")
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

const upload = multer({ dest: "uploads" })

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file)
  shelljs.cd(
    `C:\\Users\\RT\\Documents\\Internal-systems-offical\\Internal-Systems`
  )
  let test = shelljs.exec(`git add src/server/uploads`)
  console.log(test)
  shelljs.exec(`git commit -m "Uploaded file" `)
  shelljs.exec(`git push origin main`)
  shelljs.cd(`src\\server`)
})

app.listen(port, () => console.log("server started on port 5000"))
