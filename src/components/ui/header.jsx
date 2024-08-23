/**
 * Header component.
 * @author Miranda Holmlund
 */

"use client"
import Image from 'next/image'
import Navbar from './navbar'
import ProfileButton from './profile-button'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

const Header = () => {

  const { isLoggedIn } = useAuth()

  return (
    <header className="p-4 max-w-full">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <Navbar />
        <ProfileButton isLoggedIn={isLoggedIn} profileImageUrl={'/images/logo.png'} />
      </div>
    </header>
  )
}

export default Header
