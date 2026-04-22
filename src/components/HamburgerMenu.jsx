// src/components/HamburgerMenu.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

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
      { name: 'Configure', external: 'https://www.rolls-roycemotorcars.com' },
    ],
  },
  {
    name: 'BESPOKE',
    subItems: [
      { name: 'Discover', path: '/bespoke/discover' },
      { name: 'Coachbuild', path: '/bespoke/coachbuild' },
      { name: 'Coachbuild Collection', path: '/bespoke/coachbuild-collection' },
      { name: 'Inspiration', path: '/bespoke/inspiration' },
      { name: 'Craft', path: '/bespoke/craft' },
      { name: 'Objects of Luxury', path: '/bespoke/objects-of-luxury' },
    ],
  },
  {
    name: 'OWNERSHIP',
    subItems: [
      { name: "Owners' Lounge", path: '/ownership/owners-lounge' },
      { name: 'Your Motor Car', path: '/ownership/your-motor-car' },
      { name: 'Whispers', path: '/ownership/whispers' },
      { name: 'Charging', path: '/ownership/charging' },
    ],
  },
  { name: 'PROVENANCE', path: '/provenance' },
  { name: 'BOUTIQUE', external: 'https://www.rolls-roycemotorcars.com/boutique' },
  {
    name: 'MUSE ARTS PROGRAMME',
    subItems: [
      { name: 'The Dream Commission', path: '/muse/the-dream-commission' },
      { name: 'Spirit of Ecstasy Challenge', path: '/muse/spirit-of-ecstasy-challenge' },
      { name: 'Muse Stories', path: '/muse/muse-stories' },
    ],
  },
]

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleParentClick = (idx, item) => {
    if (item.subItems) {
      setActiveIndex(activeIndex === idx ? null : idx)
    }
  }

  const handleClose = () => {
    setActiveIndex(null)
    onClose()
  }

  const handleLinkClick = () => {
    setActiveIndex(null)
    onClose()
  }

  const handleExternalLink = (url) => {
    window.open(url, '_self')
    handleClose()
  }

  return (
    <div className={`hamburger-overlay ${isOpen ? 'open' : ''}`}>
      {/* Close button — top left, matching screenshot */}
      <button className="close-overlay" onClick={handleClose} aria-label="Close menu">
        ✕
      </button>

      <nav className="overlay-content">
        {menuItems.map((item, idx) => {
          const isExpanded = activeIndex === idx
          const hasChildren = Boolean(item.subItems)

          return (
            <div key={idx} className={`overlay-menu-item ${isExpanded ? 'expanded' : ''}`}>
              {/* Parent label */}
              {item.external ? (
                <span
                  className="overlay-menu-link"
                  onClick={() => handleExternalLink(item.external)}
                >
                  {item.name}
                </span>
              ) : item.path ? (
                <Link
                  to={item.path}
                  className="overlay-menu-link"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={`overlay-menu-link ${hasChildren ? 'has-children' : ''}`}
                  onClick={() => handleParentClick(idx, item)}
                >
                  {item.name}
                  {hasChildren && (
                    <span className={`overlay-chevron ${isExpanded ? 'up' : ''}`}>›</span>
                  )}
                </span>
              )}

              {/* Submenu — only renders when expanded */}
              {hasChildren && (
                <div className={`overlay-submenu ${isExpanded ? 'submenu-open' : ''}`}>
                  <div className="overlay-submenu-inner">
                    {item.subItems.map((sub, subIdx) =>
                      sub.external ? (
                        <span
                          key={subIdx}
                          className="overlay-sub-link"
                          onClick={() => handleExternalLink(sub.external)}
                        >
                          {sub.name}
                        </span>
                      ) : (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className="overlay-sub-link"
                          onClick={handleLinkClick}
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default HamburgerMenu