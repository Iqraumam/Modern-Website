import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute w-[250px] h-[250px] rounded-full blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40"
        style={{
          top: pos.y - 125,
          left: pos.x - 125,
        }}
      />

      <div className="relative z-10 flex gap-6 p-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
