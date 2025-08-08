import { useState } from 'react'
import '../App.css'

/**
 * Contact page providing contact details and a simple form for
 * prospective clients to leave a message.  On submission the form
 * displays a confirmation message.  No data is actually sent.
 */
function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, form data would be sent to a back‑end service here.
    setSubmitted(true)
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Une question ? Un projet à nous confier ? N’hésitez pas à nous
            contacter via le formulaire ci‑dessous ou par téléphone.
          </p>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Nos coordonnées</h3>
              <p>Adresse : Bruxelles, Belgique</p>
              <p>Téléphone : +32 123 45 67 89</p>
              <p>Email : info@qpower.be</p>
              <p>Horaires : du lundi au vendredi, 8h00 – 18h00</p>
            </div>
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <p>
                    Merci pour votre message, {nom}. Nous vous recontacterons
                    dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <button type="submit">Envoyer</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact