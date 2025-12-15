import { Link } from 'react-router-dom'
import jsmShield from '../assets/jsm-shield.png'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#212121] to-[#1a1a1a] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Shield Logo */}
        <div className="mb-8">
          <img
            src={jsmShield}
            alt="JSM Compliance Shield"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto animate-badge-flip"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Compliance You Need. Experience You Can Trust.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Delivering trusted compliance insight shaped by more than 20 years of healthcare experience, with flexible, expert-driven services that strengthen programs, reduce risk, and guide sustainable growth for life sciences companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#6B2D8F] hover:bg-[#5a2577] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto text-center"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
