import React, { useState } from "react"
import axios from "axios"

function UploadDocument() {
  const [file, setFile] = useState()

  const send = () => {
    console.log(file)
    const data = new FormData()
    data.append("file", file)
    console.log(data)
    axios
      .post("/upload", data)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err.response.data.message)
      })
  }

  return (
    <form action="#" encType="multipart/form-data">
      <div>
        <label htmlFor="fileUpload">File</label>
        <input
          type="file"
          id="file"
          accept=".md"
          onChange={event => {
            const file = event.target.files[0]
            setFile(file)
          }}
        />
      </div>
      <button type="button" onClick={send}>
        Upload
      </button>
    </form>
  )
}

export default UploadDocument
