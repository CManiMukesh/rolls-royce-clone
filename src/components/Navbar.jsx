// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import '../styles/navbar.css'

// RR Monogram SVG — replace with your own logo asset if preferred
const RRMonogram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 72"
    className="rr-monogram"
    aria-label="Rolls-Royce"
  >
    {/* Left R */}
    <path
      d="M6 8 L6 64 M6 8 Q22 8 22 22 Q22 36 6 36 M16 36 L26 64"
      stroke="white"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right R */}
    <path
      d="M32 8 L32 64 M32 8 Q48 8 48 22 Q48 36 32 36 M42 36 L52 64"
      stroke="white"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Crown-like top bar */}
    <path
      d="M4 4 L56 4"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M4 68 L56 68"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

// Search icon SVG
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-search-svg"
  >
    <circle cx="10.5" cy="10.5" r="7" />
    <line x1="16" y1="16" x2="22" y2="22" />
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* LEFT — Hamburger + MENU */}
        <div className="navbar-left">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            {/* Three-line hamburger icon */}
            <span className="ham-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="menu-label">MENU</span>
          </button>
        </div>

        {/* CENTER — RR Monogram */}
        <div className="navbar-center">
          <button className="logo-btn" onClick={handleLogoClick} aria-label="Home">
  <img src="/public/images.png" alt="Rolls-Royce" className="rr-monogram" />
</button>
        </div>

        {/* RIGHT — Search + Find a Dealer */}
        <div className="navbar-right">
          <button className="nav-icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="find-dealer" onClick={() => alert('Find a Dealer')}>
            FIND A DEALER
          </button>
        </div>
      </nav>

      {/* Thin separator line below navbar */}
      <div className={`navbar-rule ${scrolled ? 'rule-hidden' : ''}`} />

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar