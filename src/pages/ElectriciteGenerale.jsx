import '../App.css'

/**
 * Detailed page for the "Électricité générale" service.  Describes the
 * range of interventions proposed by QPower in electrical engineering and
 * emphasises the safety and compliance aspects.  Includes a call to
 * action inviting visitors to request a quote.
 */
function ElectriciteGenerale() {
  const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Electrician_Working.jpg'
  return (
    <main>
      <section className="service-detail">
        <div className="container detail-container">
          <h1>Électricité générale</h1>
          <div className="detail-grid">
            <div className="detail-text">
              <p>
                Nos électriciens qualifiés réalisent tous vos travaux en
                électricité générale. Que ce soit pour une nouvelle
                construction, une rénovation ou un dépannage rapide, nous
                assurons une installation fiable et conforme aux normes en
                vigueur (RGIE). Nous intervenons sur les tableaux
                électriques, le câblage, l’éclairage, les prises et tous les
                appareils indispensables à votre confort et à votre sécurité.
              </p>
              <p>
                Nous vous accompagnons également dans l’optimisation de votre
                consommation en proposant des solutions intelligentes (domotique,
                gestion de l’éclairage et des appareils) afin de réduire votre
                facture énergétique. Chaque projet est étudié avec soin pour
                répondre à vos besoins spécifiques tout en respectant votre
                budget.
              </p>
              <p>
                Faites appel à QPower pour bénéficier d’un service complet,
                depuis l’étude et la conception jusqu’à la mise en service et
                la maintenance. Notre équipe vous conseille et vous garantit un
                travail soigné.
              </p>
              <a href="/simulateur-devis" className="button">
                Obtenir un devis
              </a>
            </div>
            <div className="detail-image">
              <img src={imageUrl} alt="Intervention d'un électricien" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ElectriciteGenerale