import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false)

    // If not on the home page, navigate home then scroll
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span className="gradient-text">SeenThem</span>
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('features')}>Features</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
