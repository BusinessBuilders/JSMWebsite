import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import jsmLogo from '../assets/jsm.jpg'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 max-w-7xl mx-auto">
          {/* Column 1: About JSM */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#4CAF50] border-b-2 border-[#4CAF50] pb-2 inline-block">About JSM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              JSM Compliance is a leading provider of professional compliance services,
              helping businesses navigate complex regulatory landscapes with confidence
              and expertise. We deliver tailored solutions that protect and empower your organization.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#4CAF50] border-b-2 border-[#4CAF50] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#4CAF50] transition-all duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#4CAF50] transition-all duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#4CAF50] transition-all duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#4CAF50] transition-all duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">›</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#4CAF50] border-b-2 border-[#4CAF50] pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-gray-300 transition-colors cursor-default flex items-center">
                <span className="mr-2 text-[#4CAF50]">✓</span>
                Fractional Compliance Officer
              </li>
              <li className="text-gray-400 hover:text-gray-300 transition-colors cursor-default flex items-center">
                <span className="mr-2 text-[#4CAF50]">✓</span>
                Targeted Compliance Services
              </li>
              <li className="text-gray-400 hover:text-gray-300 transition-colors cursor-default flex items-center">
                <span className="mr-2 text-[#4CAF50]">✓</span>
                Compliance Strategy & Infrastructure
              </li>
              <li className="text-gray-400 hover:text-gray-300 transition-colors cursor-default flex items-center">
                <span className="mr-2 text-[#4CAF50]">✓</span>
                Special Projects
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#4CAF50] border-b-2 border-[#4CAF50] pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-gray-300 transition-colors">
                <span className="font-semibold text-white block mb-1">Email:</span>
                <a href="mailto:jennifer@jsmcompliance.com" className="hover:text-[#4CAF50] transition-colors">
                  jennifer@jsmcompliance.com
                </a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <span className="font-semibold text-white block mb-1">Phone:</span>
                <a href="tel:+19788753410" className="hover:text-[#4CAF50] transition-colors">
                  978-875-3410
                </a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <span className="font-semibold text-white block mb-1">Address:</span>
                <address className="not-italic">
                  7 Sky Farm Ln<br />
                  Sterling, MA 01564
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-8 max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4CAF50] transition-colors"
            />
            <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/jenniferhuttonscalise/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B2D8F] hover:text-[#4CAF50] transition-all duration-300 text-3xl transform hover:scale-110 hover:shadow-lg"
            aria-label="Follow JSM Compliance on LinkedIn"
            title="Connect with us on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/jsmcompliance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B2D8F] hover:text-[#4CAF50] transition-all duration-300 text-3xl transform hover:scale-110 hover:shadow-lg"
            aria-label="Follow JSM Compliance on Twitter"
            title="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/jsmcompliance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B2D8F] hover:text-[#4CAF50] transition-all duration-300 text-3xl transform hover:scale-110 hover:shadow-lg"
            aria-label="Follow JSM Compliance on Facebook"
            title="Like us on Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center space-y-3">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} JSM Compliance Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-[#4CAF50] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-[#4CAF50] transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-[#4CAF50] transition-colors">
                Cookie Policy
              </Link>
              <span>•</span>
              <Link to="/accessibility" className="hover:text-[#4CAF50] transition-colors">
                Accessibility
              </Link>
            </div>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto pt-2">
              JSM Compliance is committed to providing expert compliance solutions.
              All trademarks, logos, and brand names are the property of their respective owners.
              Professional services are subject to terms and conditions.
              Website designed by Business Builder Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
