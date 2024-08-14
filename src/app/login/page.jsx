"use client"

import { useState } from "react"
import LoginForm from "./components/login-form"
import WelcomeMessage from "./components/welcome-message"
import { Button } from "@/components/ui/button"

export default function Login() {

  const [loggedIn, setLoginStatus] = useState(false)

  return (
    <div>
      <WelcomeMessage />
      <LoginForm />
      <Button onClick={() => setLoginStatus(true)}>Utvecklingslogin - Testa loginfunktion</Button>
    </div>
  )
}