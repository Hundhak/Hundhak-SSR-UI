"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { useAuth } from "@/contexts/AuthContext"
import { useEffect, useState } from "react"

const ProfileButton = ({ profileImageUrl }) => {

  const { isLoggedIn } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  if(!mounted) return (
    <div>
      <div className="w-[50px]"></div>
    </div>
  )

  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <a href="/profile" className="flex items-center">
          <Image
            src={profileImageUrl}
            alt="Profile"
            width={'50'}
            height={'50'}
            className="rounded-full"
          />
        </a>
      ) : (
        <Link href={'/login'}>
          <Button variant="secondary">Logga in</Button>
        </Link>
      )}
    </div>
  )
}

export default ProfileButton
