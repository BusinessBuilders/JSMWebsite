import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/jsm-shield.png'
import complianceText from '../assets/jsm-compliance-text.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#212121] shadow-lg" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B2D8F] rounded"
            aria-label="JSM Home"
          >
            <img
              src={logo}
              alt="JSM Shield"
              className="h-14 sm:h-16 md:h-16 object-contain animate-badge-flip"
            />
            <img
              src={complianceText}
              alt="JSM Compliance"
              className="h-8 sm:h-10 md:h-10 object-contain brightness-125"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-[#6B2D8F] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F] rounded px-2 py-1"
              aria-label="Navigate to Home page"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#6B2D8F] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F] rounded px-2 py-1"
              aria-label="Navigate to About page"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-[#6B2D8F] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F] rounded px-2 py-1"
              aria-label="Navigate to Services page"
            >
              Services
            </Link>
            {/* Contact Us CTA Button */}
            <Link
              to="/contact"
              className="bg-[#4CAF50] text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 focus:ring-offset-[#212121]"
              aria-label="Contact us - Get in touch"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#6B2D8F] rounded p-2 transition-transform hover:scale-110"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn"
            role="menu"
          >
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block text-white hover:text-[#6B2D8F] hover:bg-[#2a2a2a] px-4 py-2 rounded transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F]"
              role="menuitem"
              aria-label="Navigate to Home page"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block text-white hover:text-[#6B2D8F] hover:bg-[#2a2a2a] px-4 py-2 rounded transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F]"
              role="menuitem"
              aria-label="Navigate to About page"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="block text-white hover:text-[#6B2D8F] hover:bg-[#2a2a2a] px-4 py-2 rounded transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#6B2D8F]"
              role="menuitem"
              aria-label="Navigate to Services page"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 focus:ring-offset-[#212121]"
              role="menuitem"
              aria-label="Contact us - Get in touch"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
