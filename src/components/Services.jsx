import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import Title from './Title'
import assets from '../assets/assets'

const servicesData = [
  {
    title: 'Advertising',
    description: 'We turn bold ideas into powerful digital solutions',
    icon: assets.ads_icon,
  },
  {
    title: 'Content Marketing',
    description: 'We turn bold ideas into powerful digital solutions',
    icon: assets.marketing_icon,
  },
  {
    title: 'Content Writing',
    description: 'We turn bold ideas into powerful digital solutions',
    icon: assets.content_icon,
  },
  {
    title: 'Social Media',
    description: 'We turn bold ideas into powerful digital solutions',
    icon: assets.social_icon,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-24 -left-24 -z-10 opacity-40 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={item}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
