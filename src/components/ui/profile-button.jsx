import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"

const ProfileButton = ({ isLoggedIn, profileImageUrl }) => {
  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <a href="/profile" className="flex items-center">
          <Image
            src={profileImageUrl}
            alt="Profile"
            width={'10'}
            height={'10'}
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
