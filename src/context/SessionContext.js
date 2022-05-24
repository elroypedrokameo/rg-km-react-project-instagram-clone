import { createContext, useState } from "react"

export const SessionContext = createContext({
  // TODO: answer here
  user: {
    id: "",
    name: "",
    image: "",
  },
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <SessionContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContext;