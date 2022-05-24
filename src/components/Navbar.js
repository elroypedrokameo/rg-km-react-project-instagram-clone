import { useEffect, useState } from "react"
import React from "react"
import InstagramImg from "../assets/logo.png"
import "../style/navbar.css"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {

  // const dataContext = useContext(SessionContext)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log("Logged in: ", dataContext)
  const [user, setUser] = useState();

  const getProfile = async () => {
    try {
      const session = await getSession();

      const sessionResult = session.data.user;
      setIsLoggedIn(true)
      setUser(sessionResult)
    } catch (err) {
      console.log("error fetch data navbar", err)
    }
  }

  useEffect(() => {
    getProfile();
  }, [])
  
  
  return (
    <div aria-label="Navbar" className="navbar">
      <div>
        <a href="/" aria-label="App Title" className="img-brand">
          <img src={InstagramImg} width="100" alt="logo-img" aria-label="App Logo" />
        </a>
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div>
        {isLoggedIn ? ( 
          <div className="login-scs">
            <p className="username" aria-label="Profile">{user.name}</p>
            <img className="profile-login" src={user.image} alt="" />
          </div>
        ) : (
          <div>
            <button onClick={() => auth()} className="login-btn" aria-label="Login">Login</button>
          </div> 
        )}
      </div>
    </div>
  )
}
