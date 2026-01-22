import React from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70">
      
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-6 text-gray-700 dark:text-white text-sm font-medium">
        <a href="#" className="hover:border-b">Home</a>
        <a href="#services" className="hover:border-b">Services</a>
        <a href="#our-work" className="hover:border-b">Our Work</a>
        <a href="#contact-us" className="hover:border-b">Contact</a>
      </div>

      {/* Right: Theme toggle + connect button */}
      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full text-sm hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
