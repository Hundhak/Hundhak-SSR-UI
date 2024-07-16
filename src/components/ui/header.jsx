"use client"
import Image from 'next/image'
import Navbar from './navbar'
import ProfileButton from './profile-button'

const Header = () => {

  const isLoggedIn = false //TO DO : Implement authentication & user service to enable account feature.

  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <Navbar />
        <ProfileButton isLoggedIn={isLoggedIn} profileImageUrl={'/images/logo.png'} />
      </div>
    </header>
  )
}

export default Header
