import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import '../App.css'

/**
 * Home page component.  Contains a hero section promoting QPower with
 * engaging imagery and call‑to‑action buttons, followed by a summary of
 * the main services offered.  Images are loaded from trusted external
 * sources and sized responsively via CSS.
 */
function Home() {
  // Remote images for the hero and services.  These originate from
  // third‑party sources referenced in the citations of the final answer.
  const heroImage =
    'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1600&q=80'
  const electricityImage =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Electrician_Working.jpg'
  const chargingImage =
    'https://upload.wikimedia.org/wikipedia/en/c/cc/Electric_Vehicles_Charging.jpg'
  const solarImage =
    'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?auto=format&fit=crop&w=1600&q=80'

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>QPower</h1>
          <p>Votre partenaire en énergie propre et installations électriques</p>
          <div className="button-group">
            <Link to="/services" className="button">
              Découvrir nos services
            </Link>
            <Link to="/simulateur-devis" className="button button-secondary">
              Estimez votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section">
        <div className="container">
          <h2>Nos services</h2>
          <p>
            Nous proposons une gamme complète de prestations pour répondre à vos
            besoins en énergie : électricité générale, installation de bornes de
            recharge et de panneaux solaires.
          </p>
          <div className="services-grid">
            <ServiceCard
              title="Électricité générale"
              description="Travaux d'installation, rénovation et dépannage électrique pour particuliers et professionnels."
              image={electricityImage}
              link="/services/electricite-generale"
            />
            <ServiceCard
              title="Bornes de recharge"
              description="Installation de bornes de recharge pour véhicules électriques, adaptées à vos besoins et conformes aux normes."
              image={chargingImage}
              link="/services/bornes-recharge"
            />
            <ServiceCard
              title="Panneaux solaires"
              description="Conception et installation de systèmes photovoltaïques performants et sur mesure pour réduire votre facture énergétique."
              image={solarImage}
              link="/services/panneaux-solaires"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Prêt·e à franchir le pas ?</h2>
          <p>
            Faites confiance à QPower pour optimiser votre consommation
            énergétique et installer des solutions durables.
          </p>
          <Link to="/simulateur-devis" className="button">
            Simuler mon devis
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home