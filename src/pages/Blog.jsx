import '../App.css'

/**
 * Blog page presenting a selection of articles related to energy savings,
 * technological innovations and practical advice.  Each article is
 * represented by a card with an image, title, date and excerpt.
 */
function Blog() {
  const posts = [
    {
      title: 'Économies d’énergie : nos conseils',
      date: '10 août 2025',
      excerpt:
        'Réduire votre consommation d’électricité est plus simple qu’il n’y paraît. Découvrez nos astuces pour économiser au quotidien.',
      image:
        'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Innovations dans les bornes de recharge',
      date: '5 juillet 2025',
      excerpt:
        'Les nouvelles générations de bornes intelligentes optimisent la charge de votre véhicule et la répartition de la puissance.',
      image:
        'https://upload.wikimedia.org/wikipedia/en/c/cc/Electric_Vehicles_Charging.jpg',
    },
    {
      title: 'Comprendre le photovoltaïque',
      date: '15 juin 2025',
      excerpt:
        'Comment fonctionne une installation solaire ? Quels sont les composants essentiels et comment choisir la bonne puissance ?',
      image:
        'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?auto=format&fit=crop&w=1600&q=80',
    },
  ]
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Blog &amp; actualités</h1>
          <p>
            Retrouvez nos articles pour vous informer sur les économies
            d’énergie, les innovations technologiques et les conseils
            pratiques concernant vos installations.
          </p>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div className="blog-card" key={index}>
                <img src={post.image} alt={post.title} />
                <div className="blog-card-body">
                  <h3>{post.title}</h3>
                  <span className="blog-date">{post.date}</span>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog