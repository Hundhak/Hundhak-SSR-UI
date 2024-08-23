/**
 * An authentication context for handling the state of the users logged in status.
 */
"use client"
import { createContext, useState, useContext, useEffect } from "react"


const AuthContext = createContext()

/**
 * An authcontext to be used for tracking and changing logged in status.
 * 
 * @param {*} param0 Children objects.
 * @returns {Object} Returns an AuthContext
 */
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    //This will only run on the client side
    const storedLoginState = localStorage.getItem('isLoggedIn')
    if(storedLoginState) {
      setIsLoggedIn(JSON.parse(storedLoginState))
    }
  })

  //Sets the user as logged in
  const login = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
  }

  //Sets the user as logged out
  const logout = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Use for tracking and changing the auth status globally.
 * 
 * @returns {Object} Returns an AuthContext
 */
export function useAuth() {
  return useContext(AuthContext)
}