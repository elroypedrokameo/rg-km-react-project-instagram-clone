// TODO: answer here
import { useEffect, useState } from "react"
import axios from "axios"
import {API_URL} from "../api/config"



export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const [caption, setCaption] = useState("")
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const submitForm = async () => {
    const formData = new FormData()

    formData.append("content", caption)
    formData.append("image", image)

    await axios.post(`${API_URL}/post/create`, formData, {withCredentials: true})

    onSubmit()
  }


  return (
    <div aria-label="Upload Form" className="upload-form">
      <form onSubmit={ () => {submitForm()}} encType="multipart/form-data">
        <label htmlFor="image">Image</label>
        <input
          aria-label="Image Input"
          className="image-input"
          type="file"
          accept="image/png, image/jpg, image/gif"
          onChange={(e) => setImage(e.target.files)}
        />
        <label htmlFor="caption">Caption</label>
        <input
          aria-label="Caption Input"
          className="caption-input"
          type="text"
          placeholder="Caption"
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          aria-label="Submit Button"
          className="submit-btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}