import Image from 'next/image'

const Header = () => {

  const isLoggedIn = false //TO DO : Implement authentication & user service to enable account feature.

  return (
    <header className="bg-accent-teal p-4">
      <div className="flex items-center justify-between">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <nav className="space-x-4">
          <a href="/" className="text-accent-orange font-semibold">Home</a>
          <a href="/news" className="text-accent-orange font-semibold">News</a>
          <a href="/map" className="text-accent-orange font-semibold">Map</a>
          <a href="/quiz" className="text-accent-orange font-semibold">Quiz</a>
          {(isLoggedIn ? <a href="/profile" className="text-accent-orange font-semibold">My profile</a> : <a href="/login" className="text-accent-orange font-semibold">Login</a>)}
        </nav>
      </div>
    </header>
  )
}

export default Header
