import { Link } from 'react-router-dom'
import '../App.css'

/**
 * Card used to present a service.  Displays an image, a title, a short
 * description and an optional link for more information.  The card
 * responds to hover with a slight elevation.
 */
function ServiceCard({ title, description, image, link }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="button">
            En savoir plus
          </Link>
        )}
      </div>
    </div>
  )
}

export default ServiceCard