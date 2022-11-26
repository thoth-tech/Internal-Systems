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
      .post("http://localhost:5000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <form action="#" enctype="multipart/form-data">
      <div>
        <label htmlFor="fileUpload">File</label>
        <input
          type="file"
          id="file"
          onChange={event => {
            const file = event.target.files[0]
            setFile(file)
          }}
        />
      </div>
      <button onClick={send}>Upload</button>
    </form>
  )
}

export default UploadDocument
