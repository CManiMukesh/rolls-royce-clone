// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>MODELS</h4>
          <ul>
            <li><Link to="/showroom/phantom">Phantom</Link></li>
            <li><Link to="/showroom/spectre">Spectre</Link></li>
            <li><Link to="/showroom/ghost">Ghost</Link></li>
            <li><Link to="/showroom/cullinan">Cullinan</Link></li>
            <li><Link to="/showroom/black-badge">Black Badge</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>BESPOKE</h4>
          <ul>
            <li><Link to="/bespoke/discover">Discover Bespoke</Link></li>
            <li><Link to="/bespoke/craft">Craftsmanship</Link></li>
            <li><Link to="/bespoke/coachbuild-collection">Coachbuild</Link></li>
            <li><Link to="/bespoke/project-nightingale">Project Nightingale</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>OWNERSHIP</h4>
          <ul>
            <li><Link to="/ownership/owners-lounge">Owners' Lounge</Link></li>
            <li><Link to="/ownership/your-motor-car">Your Motor Car</Link></li>
            <li><Link to="/ownership/whispers">Whispers</Link></li>
            <li><Link to="/ownership/charging">Charging</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>MUSE</h4>
          <ul>
            <li><Link to="/muse/the-dream-commission">Dream Commission</Link></li>
            <li><Link to="/muse/spirit-of-ecstasy-challenge">Spirit of Ecstasy Challenge</Link></li>
            <li><Link to="/muse/muse-stories">Muse Stories</Link></li>
            <li><Link to="/inspiring-greatness">Inspiring Greatness</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Rolls-Royce Motor Cars. All rights reserved. | Privacy Policy | Legal | Cookie Settings</p>
      </div>
    </footer>
  )
}

export default Footer