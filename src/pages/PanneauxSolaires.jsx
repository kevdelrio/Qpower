import '../App.css'

/**
 * Detailed page for the "Panneaux solaires" service.  Highlights the
 * benefits of photovoltaic systems, describes QPower’s comprehensive
 * approach and reassures visitors about quality and follow‑up.
 */
function PanneauxSolaires() {
  const imageUrl =
    'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?auto=format&fit=crop&w=1600&q=80'
  return (
    <main>
      <section className="service-detail">
        <div className="container detail-container">
          <h1>Panneaux solaires</h1>
          <div className="detail-grid">
            <div className="detail-text">
              <p>
                Produisez votre propre électricité grâce à l’énergie solaire.
                QPower conçoit et installe des systèmes photovoltaïques
                performants, adaptés à votre toit et à votre consommation.
              </p>
              <p>
                Nous réalisons une étude approfondie : orientation et
                inclinaison du toit, ensoleillement, dimensionnement de la
                puissance, choix des modules et des onduleurs. Nos équipes
                certifiées procèdent ensuite à l’installation et au raccordement
                en garantissant la sécurité et la conformité aux normes.
              </p>
              <p>
                Investir dans des panneaux solaires, c’est réduire durablement
                votre facture énergétique et contribuer à la transition
                énergétique. Nos installations sont garanties et nous assurons
                un service après‑vente réactif.
              </p>
              <a href="/simulateur-devis" className="button">
                Obtenir un devis
              </a>
            </div>
            <div className="detail-image">
              <img src={imageUrl} alt="Installation de panneaux solaires" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PanneauxSolaires