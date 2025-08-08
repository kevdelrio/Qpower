import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../App.css'

/**
 * Responsive navigation bar.  Displays the company logo and a series of
 * navigation links.  On smaller screens a hamburger menu appears which
 * toggles the visibility of the navigation links.  The active route is
 * highlighted via the `active` class.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  /**
   * Determine whether the provided path matches the current location.
   * Used to apply an active class to the corresponding navigation link.
   */
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          QPower
        </Link>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Ouvrir/fermer le menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className={isActive('/') ? 'active' : ''}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={handleLinkClick}
              className={isActive('/services') ? 'active' : ''}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/realisations"
              onClick={handleLinkClick}
              className={isActive('/realisations') ? 'active' : ''}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className={isActive('/blog') ? 'active' : ''}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/simulateur-devis"
              onClick={handleLinkClick}
              className={isActive('/simulateur-devis') ? 'active' : ''}
            >
              Simulateur de devis
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar