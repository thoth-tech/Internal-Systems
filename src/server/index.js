const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

const upload = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname + ".md")
  },
})

const fileSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
})

const File = mongoose.model("File", fileSchema)

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file)
  try {
    const newFile = await File.create({
      name: req.file.originalname,
    })
    res.status(200).json({
      status: "success",
      message: "File created",
    })
  } catch (err) {
    res.json({ err })
  }
})

app.listen(port, () => console.log("server started on port 5000"))
