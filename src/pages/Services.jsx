import ServiceCard from '../components/ServiceCard'
import '../App.css'

/**
 * Services overview page.  Provides succinct descriptions of each
 * specialisation offered by QPower and links to the corresponding
 * detailed pages.  Uses the ServiceCard component for consistent
 * presentation.
 */
function Services() {
  const electricityImage =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Electrician_Working.jpg'
  const chargingImage =
    'https://upload.wikimedia.org/wikipedia/en/c/cc/Electric_Vehicles_Charging.jpg'
  const solarImage =
    'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?auto=format&fit=crop&w=1600&q=80'
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Nos services</h1>
          <p>
            QPower met son expertise à votre service pour tous vos projets
            énergétiques. Choisissez l’une de nos prestations pour en savoir
            davantage.
          </p>
          <div className="services-grid">
            <ServiceCard
              title="Électricité générale"
              description="Installation, rénovation et maintenance de vos réseaux électriques."
              image={electricityImage}
              link="/services/electricite-generale"
            />
            <ServiceCard
              title="Bornes de recharge"
              description="Pose de bornes de recharge pour véhicules électriques : résidentiel, tertiaire et public."
              image={chargingImage}
              link="/services/bornes-recharge"
            />
            <ServiceCard
              title="Panneaux solaires"
              description="Étude, dimensionnement et installation de systèmes photovoltaïques clé en main."
              image={solarImage}
              link="/services/panneaux-solaires"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services