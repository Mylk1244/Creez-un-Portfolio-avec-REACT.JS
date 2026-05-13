import React from 'react';
 
function Portfolio() {
  const projects = [
    {
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec PHP et MySQL',
    image: '/img/portfolio/fresh-food.jpg',
  },
  {
    title: 'Restaurant Akira',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec WordPress',
    image: '/img/portfolio/restaurant-japonais.jpg',
  },
  {
    title: 'Espace bien-être',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec LARAVEL',
    image: '/img/portfolio/espace-bien-etre.jpg',
  },
  {
    title: 'SEO',
    description: "Amélioration du référencement d'un site e-commerce",
    tech: 'Utilisation des outils SEO',
    image: '/img/portfolio/seo.jpg',
  },
  {
    title: "Création d'une API",
    description: 'Création une API RESTFULL publique',
    tech: 'PHP - SYMFONY',
    image: '/img/portfolio/coder.jpg',
  },
  {
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    tech: 'Réalisé avec FIGMA',
    image: '/img/portfolio/screens.jpg',
  },
];
 
  return (
    <main>
      <div style={{
        backgroundImage: 'url(/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
        }}></div>
 
      {/* Contenu */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-1">Portfolio</h2>
          <p className="text-muted mb-2">Voici quelques-unes de mes réalisations.</p>
          <hr className="section-divider mx-auto mb-5" />
 
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 portfolio-card shadow-sm">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted small">{project.description}</p>
                    <a href="#!" className="btn btn-primary btn-sm px-4">
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer text-muted small text-center bg-white border-top">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
 
export default Portfolio;