/**
 * Footer component.
 * @author Miranda Holmlund
 */


"use client"
import Link from "next/link"

const Footer = () => {
  return (
  <footer className="py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h4 className="text-lg font-semibold">Om oss</h4>
        <p className="text-sm mt-2 text-gray-600">Vi är en gemenskap av hundälskare i Sverige. Här kan du dela dina upplevelser, hitta hundvänliga hak, och nya vänner!</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Snabblänkar</h4>
        <ul className="mt-2">
          <li><Link className="text-gray-600 hover:text-gray-800" href={'/'}>Startsidan</Link></li>
          <li><Link className="text-gray-600 hover:text-gray-800" href={'/news'}>Nyheter</Link></li>
          <li><Link className="text-gray-600 hover:text-gray-800" href={'/map'}>Karta</Link></li>
          <li><Link className="text-gray-600 hover:text-gray-800" href={'/vovvenoje'}>Vovvenöje</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Följ oss</h4>
        <div className="mt-2 flex space-x-4">
          <Link className="text-gray-600 hover:text-gray-800" href={'/'}>Facebook</Link>
          <Link className="text-gray-600 hover:text-gray-800" href={'/'}>Instagram</Link>
          <Link className="text-gray-600 hover:text-gray-800" href={'/'}>YouTube</Link>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer