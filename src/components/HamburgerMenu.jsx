// src/components/HamburgerMenu.jsx
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const HamburgerMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'INSPIRING GREATNESS', path: '/inspiring-greatness' },
    { 
      name: 'MODELS', 
      subItems: [
        { name: 'Phantom', path: '/showroom/phantom' },
        { name: 'Phantom Extended', path: '/showroom/phantom-extended' },
        { name: 'Spectre', path: '/showroom/spectre' },
        { name: 'Ghost', path: '/showroom/ghost' },
        { name: 'Ghost Extended', path: '/showroom/ghost-extended' },
        { name: 'Cullinan', path: '/showroom/cullinan' },
        { name: 'Black Badge', path: '/showroom/black-badge' },
        { name: 'Configure →', external: 'https://www.rolls-roycemotorcars.com' }
      ]
    },
    { 
      name: 'BESPOKE', 
      subItems: [
        { name: 'Discover Bespoke', path: '/bespoke/discover' },
        { name: 'Inspiration', path: '/bespoke/inspiration' },
        { name: 'Craft', path: '/bespoke/craft' },
        { name: 'Objects of Luxury', path: '/bespoke/objects-of-luxury' },
        { name: 'Coachbuild', path: '/bespoke/coachbuild-collection' },
        { name: 'Project Nightingale', path: '/bespoke/project-nightingale' },
        { name: 'Arcadia Droptail', path: '/bespoke/coachbuild/arcadia-droptail' },
        { name: 'Amethyst Droptail', path: '/bespoke/coachbuild/amethyst-droptail' },
        { name: 'La Rose Noire Droptail', path: '/bespoke/coachbuild/la-rose-noire-droptail' }
      ]
    },
    { 
      name: 'OWNERSHIP', 
      subItems: [
        { name: 'Owners\' Lounge', path: '/ownership/owners-lounge' },
        { name: 'Your Motor Car', path: '/ownership/your-motor-car' },
        { name: 'Whispers', path: '/ownership/whispers' },
        { name: 'Charging', path: '/ownership/charging' }
      ]
    },
    { name: 'PROVENANCE', path: '/provenance' },
    { name: 'BOUTIQUE', external: 'https://www.rolls-roycemotorcars.com/boutique' },
    { 
      name: 'MUSE ARTS PROGRAMME', 
      subItems: [
        { name: 'The Dream Commission', path: '/muse/the-dream-commission' },
        { name: 'Spirit of Ecstasy Challenge', path: '/muse/spirit-of-ecstasy-challenge' },
        { name: 'Muse Stories', path: '/muse/muse-stories' }
      ]
    }
  ]

  const handleLinkClick = () => {
    onClose()
  }

  const handleExternalLink = (url) => {
    window.open(url, '_self')
    onClose()
  }

  return (
    <div className={`hamburger-overlay ${isOpen ? 'open' : ''}`}>
      <div className="close-overlay" onClick={onClose}>✕</div>
      <div className="overlay-content">
        {menuItems.map((item, idx) => (
          <div key={idx} className="overlay-menu-item">
            {item.external ? (
              <div 
                className="overlay-menu-link"
                onClick={() => handleExternalLink(item.external)}
              >
                {item.name}
              </div>
            ) : item.path ? (
              <Link 
                to={item.path} 
                className="overlay-menu-link"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ) : (
              <span className="overlay-menu-link">{item.name}</span>
            )}
            
            {item.subItems && (
              <div className="overlay-submenu">
                {item.subItems.map((sub, subIdx) => (
                  sub.external ? (
                    <div 
                      key={subIdx} 
                      onClick={() => handleExternalLink(sub.external)}
                      style={{ cursor: 'pointer' }}
                    >
                      {sub.name}
                    </div>
                  ) : (
                    <Link 
                      key={subIdx} 
                      to={sub.path}
                      onClick={handleLinkClick}
                    >
                      {sub.name}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HamburgerMenu