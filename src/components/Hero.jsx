import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center gap-6 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center overflow-hidden"
    >
      {/* Floating background blur */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/30 blur-3xl rounded-full -top-32 -left-32 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500/30 blur-3xl rounded-full bottom-0 right-0 animate-pulse" />

      {/* Profiles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-2 z-10"
      >
        <img className="w-20" src={assets.group_profile} alt="profiles" />
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Trusted by 100k+ people
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[82px] font-semibold max-w-5xl z-10"
      >
        Empowering the Next Generation of{' '}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Digital Innovation
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl z-10"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      {/* Image */}
      <motion.img
        src={assets.hero_img}
        alt="hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-4xl z-10"
      />
    </section>
  )
}

export default Hero
