import React from 'react';

function Services() {
  const services = [
    {
      icon: 'bi bi-pencil',
      title: 'UX Design',
      description:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Développement web',
      description:
        'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
    },
    {
      icon: 'bi bi-search',
      title: 'Référencement',
      description:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <main>
      {/* Hero banner */}
      <div style={{
        backgroundImage: 'url(/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
        }}></div>

      {/* Contenu */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-1">Mon offre de services</h2>
          <p className="text-muted mb-2">Voici les prestations sur lesquelles je peux intervenir</p>
          <hr className="section-divider mx-auto mb-5" />

          <div className="row justify-content-center g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border service-card p-4 text-center">
                  <i className={`${service.icon} service-icon mb-3`}></i>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted small">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;