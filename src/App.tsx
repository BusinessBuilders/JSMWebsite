import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Accessibility from './pages/Accessibility'
import Footer from './components/Footer'

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <Router>
        <div className="min-h-screen bg-jsm-darker">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GoogleReCaptchaProvider>
  )
}

// Page components
const Home = () => (
  <>
    <Hero />
    <Services />
  </>
)
const ServicesPage = () => (
  <>
    <div className="pt-20 pb-12 bg-jsm-darker">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Comprehensive pharmaceutical compliance solutions tailored to your needs
        </p>
      </div>
    </div>
    <Services />
  </>
)

export default App
