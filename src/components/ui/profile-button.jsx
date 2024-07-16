import Image from "next/image"

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
        <a
          href="/login"
          className="font-semibold text-lg bg-secondary text-white px-4 py-2 rounded-md transition duration-300"
        >
          Login
        </a>
      )}
    </div>
  )
}

export default ProfileButton
