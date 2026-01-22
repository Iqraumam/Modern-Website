import React, { useEffect, useState } from 'react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    // Optional: hover state for buttons or cards
    const addHover = () => setHovered(true)
    const removeHover = () => setHovered(false)

    document.querySelectorAll('a, button, .hoverable').forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Outer circle */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 w-10 h-10 rounded-full border-2 border-primary transition-transform duration-150 ease-out
        ${clicked ? 'scale-75' : hovered ? 'scale-150 border-4 border-primary/50' : 'scale-100'}`}
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
        }}
      />

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 w-3 h-3 rounded-full bg-primary"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
        }}
      />
    </>
  )
}

export default Cursor
