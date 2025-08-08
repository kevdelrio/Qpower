import '../App.css'

/**
 * Réalisations page showcasing example projects undertaken by QPower.
 * Each item includes an image and a brief description to demonstrate
 * expertise and reassure potential clients.  Images are loaded from
 * external sources referenced in the citations.
 */
function Realisations() {
  const projects = [
    {
      title: 'Rénovation électrique complète',
      description:
        'Mise aux normes d’une installation vétuste et optimisation de la distribution intérieure.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/37/Electrician_Working.jpg',
    },
    {
      title: 'Installation d’une borne de recharge',
      description:
        'Pose d’une borne 7 kW dans un garage de particulier avec contrôle de charge intelligent.',
      image:
        'https://upload.wikimedia.org/wikipedia/en/c/cc/Electric_Vehicles_Charging.jpg',
    },
    {
      title: 'Pose de panneaux solaires',
      description:
        '10 panneaux installés sur une toiture inclinée pour une production annuelle de 3,5 kWc.',
      image:
        'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?auto=format&fit=crop&w=1600&q=80',
    },
  ]

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Nos réalisations</h1>
          <p>
            Découvrez quelques‑uns de nos projets récents. Ces exemples
            illustrent notre savoir‑faire et l’attention portée à la qualité.
          </p>
          <div className="realisations-grid">
            {projects.map((proj, index) => (
              <div className="realisations-item" key={index}>
                <img src={proj.image} alt={proj.title} />
                <div className="item-body">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Realisations