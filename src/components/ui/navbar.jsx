/**
 * Navbar component.
 * @author Miranda Holmlund
 */

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerPath = "M4 6h16M4 12h16M4 18h16"
  const xPath = "M6 18L18 6M6 6l12 12"

  return (
    <div className="relative">
      <button
        className="md:hidden p-2 bg-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? xPath : hamburgerPath}
          ></path>
        </svg>
      </button>
      <nav className={`absolute -left-40  z-30 text-2xl flex-col bg-white space-y-9 md:left-0 md:right-0 md:flex md:flex-row md:space-x-4 md:space-y-0 md:bg-transparent md:relative md:opacity-100 md:w-full transition-all duration-300 ease-in-out ${isOpen ? 'flex items-center space-y-6 p-4 opacity-100 w-screen' : 'flex items-center opacity-0 delay-100 w-full'}`}>
        <a href="/" className="font-semibold">Start</a>
        <a href="/news" className="font-semibold">Nyheter</a>
        <a href="/map" className="font-semibold">Karta</a>
        <a href="/vovvenoje" className="font-semibold">Vovvenöje</a>
      </nav>
    </div>
  )
}

export default Navbar;
