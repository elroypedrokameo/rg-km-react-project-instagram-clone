import { useEffect, useState } from "react"
import "./App.css"
// TODO: answer here
import SessionContext from "./context/SessionContext"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import UploadForm from "./components/UploadForm"
// import Profile from "./components/Profile"
import axios from "axios"
import {API_URL} from "./api/config"


function App() {
  // TODO: answer here
  const [postList, setPostList] = useState()
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  const getPost = async () => {
    try {
      const postData = await axios.get(`${API_URL}/post/list`, {withCredentials: true })
      // console.log("postData", postData)
      setPostList(postData.data.data)
    } catch (err) {
      console.log("Error fetch post data", err)
    }
  }

  const handleSubmitpost = async (formData) => {
    try {
      const submitPost = await axios.post(`${API_URL}/post/create`, formData, {withCredentials: true })
      // setPostList(submitPost)
      console.log("submitPost", submitPost)
    } catch (err) {
      console.log("Error submit post", err)
    }
  }


  useEffect(() => {
    handleSubmitpost()
  }, [])
  
  useEffect(() => {
    getPost()
  }, [])

  console.log("PostList: ", postList)
  
  return (
    <div aria-label="App">
      <h1 aria-label="App-title">
        <SessionContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}} >
          <Navbar />
          <UploadForm onSubmit={handleSubmitpost()} />
          {postList?.map((index, id) => (
            <PostCard
              key={id}
              image={index.image}
              username={index.author.name}
              caption={index.content}
              date={index.createdAt}
              userId={index.author.image}
              post={index}
            />
          ))}
        </SessionContext.Provider>
      </h1>
    </div>
  )
}

export default App
