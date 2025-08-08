import { useState } from 'react'
import '../App.css'

/**
 * Simulateur de devis.  Permet à l’utilisateur de choisir un type de
 * prestation et de saisir quelques paramètres pour obtenir une
 * estimation indicative du coût.  Les résultats affichés sont
 * purement informatifs et n’ont pas de valeur contractuelle.
 */
function SimulateurDevis() {
  const [serviceType, setServiceType] = useState('')
  const [surface, setSurface] = useState('')
  const [puissance, setPuissance] = useState('')
  const [nbPanneaux, setNbPanneaux] = useState('')
  const [resultat, setResultat] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let total = 0
    if (serviceType === 'electricite') {
      const s = parseFloat(surface)
      if (!isNaN(s)) {
        total = s * 70
      }
    } else if (serviceType === 'borne') {
      const p = parseFloat(puissance)
      if (!isNaN(p)) {
        total = p * 250 + 500
      }
    } else if (serviceType === 'solaire') {
      const n = parseInt(nbPanneaux)
      if (!isNaN(n)) {
        total = n * 600 + 300
      }
    }
    setResultat(total > 0 ? total : null)
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Simulateur de devis</h1>
          <p>
            Obtenez immédiatement une estimation indicative en renseignant les
            informations ci‑dessous. Le montant affiché n’inclut pas
            nécessairement toutes les spécificités de votre projet.
          </p>
          <form className="devis-form" onSubmit={handleSubmit}>
            <label htmlFor="serviceType">Type de service</label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">-- Sélectionnez --</option>
              <option value="electricite">Électricité générale</option>
              <option value="borne">Borne de recharge</option>
              <option value="solaire">Panneaux solaires</option>
            </select>

            {serviceType === 'electricite' && (
              <>
                <label htmlFor="surface">Surface du logement (m²)</label>
                <input
                  type="number"
                  id="surface"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  min="1"
                  required
                />
              </>
            )}

            {serviceType === 'borne' && (
              <>
                <label htmlFor="puissance">Puissance de la borne (kW)</label>
                <input
                  type="number"
                  id="puissance"
                  value={puissance}
                  onChange={(e) => setPuissance(e.target.value)}
                  min="1"
                  step="0.1"
                  required
                />
              </>
            )}

            {serviceType === 'solaire' && (
              <>
                <label htmlFor="nbPanneaux">Nombre de panneaux</label>
                <input
                  type="number"
                  id="nbPanneaux"
                  value={nbPanneaux}
                  onChange={(e) => setNbPanneaux(e.target.value)}
                  min="1"
                  required
                />
              </>
            )}

            <button type="submit">Calculer</button>

            {resultat !== null && (
              <div className="devis-result">
                Estimation du coût : <strong>{resultat.toFixed(2)} € TTC</strong>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default SimulateurDevis