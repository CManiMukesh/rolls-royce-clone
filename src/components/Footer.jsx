// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo-wrap">
        <div className="footer-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" className="rr-logo-svg">
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="rr-logo-text">
              ROLLS-ROYCE
            </text>
            <text x="50%" y="85%" dominantBaseline="middle" textAnchor="middle" className="rr-logo-sub">
              MOTOR CARS
            </text>
          </svg>
        </div>
      </div>

      {/* Top divider */}
      <div className="footer-divider" />

      {/* Nav Links Grid */}
      <div className="footer-nav">
        <div className="footer-nav-col">
          <Link to="/pre-owned" className="footer-link">PRE-OWNED</Link>
          <Link to="/eu-tyre-labels" className="footer-link">EU TYRE LABELS</Link>
          <Link to="/site-map" className="footer-link">SITE MAP</Link>
        </div>
        <div className="footer-nav-col">
          <Link to="/cookies" className="footer-link">COOKIES</Link>
          <Link to="/battery-regulation" className="footer-link">BATTERY REGULATION</Link>
          <Link to="/whispers" className="footer-link">WHISPERS</Link>
        </div>
        <div className="footer-nav-col">
          <Link to="/pressclub" className="footer-link">PRESSCLUB</Link>
          <Link to="/faqs" className="footer-link">FAQS</Link>
          <Link to="/sustainability" className="footer-link">SUSTAINABILITY</Link>
        </div>
        <div className="footer-nav-col">
          <Link to="/legal" className="footer-link">LEGAL</Link>
          <Link to="/contact" className="footer-link">CONTACT</Link>
          <div className="footer-language">
            <Link to="/language" className="footer-link">LANGUAGE</Link>
            <span className="footer-flag">
              {/* UK Flag SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="14">
                <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
                <clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
                <g clipPath="url(#a)">
                  <path d="M0 0v30h60V0z" fill="#012169"/>
                  <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className="footer-nav-col">
          <Link to="/complaints" className="footer-link">COMPLAINTS</Link>
          <Link to="/privacy" className="footer-link">PRIVACY</Link>
        </div>
        <div className="footer-nav-col">
          <Link to="/find-a-dealer" className="footer-link">FIND A DEALER</Link>
          <Link to="/careers" className="footer-link">CAREERS</Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="footer-divider" />

      {/* Social Icons */}
      <div className="footer-social">
        {/* YouTube */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer