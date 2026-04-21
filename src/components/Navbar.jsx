// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import '../styles/navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [spiritEffect, setSpiritEffect] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      
      // Spirit of Ecstasy effect: logo transforms when scrolling
      if (window.scrollY > 100) {
        setSpiritEffect(true)
      } else {
        setSpiritEffect(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFindDealer = () => {
    alert('Find a Dealer - Contact Rolls-Royce dealerships')
  }

  const handleSearch = () => {
    alert('Search functionality')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className="navbar-center">
          <div 
            className={`logo ${spiritEffect ? 'spirit-effect' : ''}`}
            onClick={handleLogoClick}
          >
            ROLLS-ROYCE
          </div>
        </div>
        
        <div className="navbar-right">
          <div className="search-icon" onClick={handleSearch}>
            🔍
          </div>
          <div className="find-dealer" onClick={handleFindDealer}>
            FIND A DEALER
          </div>
        </div>
      </nav>
      
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar