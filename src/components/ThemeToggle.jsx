import React from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border border-gray-400 dark:border-gray-600 rounded-full p-1.5"
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt="theme toggle"
        className="w-6 h-6"
      />
    </button>
  )
}

export default ThemeToggle
