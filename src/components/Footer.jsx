import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-4 sm:px-12 lg:px-24 xl:px-40">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Left: Logo + description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32 sm:w-40"
          />
          <p className="text-sm max-w-xs text-center md:text-left">
            Empowering digital solutions for businesses and creators worldwide. Join us and innovate.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#our-work" className="hover:text-primary transition-colors">Our Work</a>
          <a href="#contact-us" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col gap-2 items-center md:items-end">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">
              <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

      {/* Bottom section */}
      <div className="text-center text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
