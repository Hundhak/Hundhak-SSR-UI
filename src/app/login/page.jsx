"use client"

import LoginForm from "./components/login-form"
import WelcomeMessage from "./components/welcome-message"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"

export default function Login() {

  const { isLoggedIn, login, logout } = useAuth()

  return (
    <div>
      <WelcomeMessage />
      <div className="flex items-center justify-center py-8">
        {isLoggedIn ? (
          <Button variant="outline" className="bg-black text-white" onClick={logout}>Utvecklingsutloggning - Logga ut</Button>
        ) : (
          <Button variant="outline" className="bg-gray-400" onClick={login}>Utvecklingsinloggning - Logga in</Button>
        )}
      </div>
      <LoginForm />
    </div>
  )
}