import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

/**
 * Footer component providing company description, useful links, contact
 * information and social media icons.  It is displayed at the bottom of
 * every page.  The copyright notice updates automatically with the
 * current year.
 */
function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>QPower</h3>
            <p>
              Solutions d'électricité générale, installation de bornes de
              recharge et panneaux solaires. Nous accompagnons particuliers et
              professionnels vers la transition énergétique.
            </p>
          </div>
          <div className="footer-column">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/realisations">Réalisations</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/simulateur-devis">Simulateur</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Coordonnées</h4>
            <p>Adresse : Bruxelles, Belgique</p>
            <p>Téléphone : +32 123 45 67 89</p>
            <p>Email : info@qpower.be</p>
          </div>
          <div className="footer-column">
            <h4>Suivez‑nous</h4>
            <div className="footer-social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} QPower. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer