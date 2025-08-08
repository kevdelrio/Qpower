import '../App.css'

/**
 * Detailed page for the "Bornes de recharge" service.  Explains the
 * advantages of installing a dedicated charging point at home or in the
 * workplace, the different power ratings available and QPower’s
 * personalised support.
 */
function BornesRecharge() {
  const imageUrl =
    'https://upload.wikimedia.org/wikipedia/en/c/cc/Electric_Vehicles_Charging.jpg'
  return (
    <main>
      <section className="service-detail">
        <div className="container detail-container">
          <h1>Bornes de recharge</h1>
          <div className="detail-grid">
            <div className="detail-text">
              <p>
                La mobilité électrique est en plein essor. Pour recharger
                efficacement votre véhicule, optez pour l’installation d’une
                borne de recharge dédiée. QPower vous propose des solutions
                sur mesure pour les particuliers, les copropriétés et les
                entreprises.
              </p>
              <p>
                Nous installons des bornes de différentes puissances (3,7 kW à
                22 kW) en fonction de vos besoins et de la capacité de votre
                installation électrique. Nos techniciens certifiés vous
                conseillent sur le choix de la borne, réalisent le
                dimensionnement et assurent la mise en service en toute
                sécurité. Toutes nos installations respectent les normes
                électriques et disposent des protections nécessaires.
              </p>
              <p>
                En choisissant QPower, vous bénéficiez d’un accompagnement
                personnalisé : analyse de vos besoins, devis détaillé,
                installation professionnelle et maintenance. Nous pouvons
                également proposer des solutions de gestion intelligente de la
                charge pour optimiser votre consommation.
              </p>
              <a href="/simulateur-devis" className="button">
                Obtenir un devis
              </a>
            </div>
            <div className="detail-image">
              <img src={imageUrl} alt="Borne de recharge pour véhicules électriques" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BornesRecharge