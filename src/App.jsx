import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
const App = () => {
  // Get theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Cursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

export default App
