import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    if (showModal && !githubData) {
      fetch('https://api.github.com/users/github-john-doe')
        .then(res => res.json())
        .then(data => setGithubData(data));
    }
  }, [showModal]);

  return (
    <div className="home-page">

      {/* HERO BANNER */}
      <section
        className="hero-banner text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="display-6 fw-bold mb-4">Développeur web full stack</h2>
          <button
            className="btn btn-danger text-uppercase px-4 py-2"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {<section className="py-5 bg-light">
  <div className="container">
    <div className="card shadow-sm p-4">
      <div className="row g-4">

        {/* COLONNE GAUCHE : A PROPOS */}
        <div className="col-md-6">
          <h3 className="section-title mb-4">A propos</h3>
          <img
            src="/img/john-doe-about.jpg"
            alt="John Doe travaillant"
            className="img-fluid rounded mb-3"
          />
          <div className="about-text">
            <p>Fusce efficitur feugiat condimentum. Ut sit amet pretium leo, sit amet venenatis ipsum. Fusce tincidunt felis in ullamcorper tristique. Etiam tempor diam dui, sed ultricies risus cursus finibus.</p>
            <p>Vestibulum ultrices posuere risus et euismod. Praesent mollis erat sit amet dui interdum auctor. Pellentesque rhoncus facilisis ligula, vitae pretium lorem tempus eget. Nulla congue mattis fermentum. Integer dictum massa ut nulla luctus fringilla.</p>
            <p>Etiam eget augue sit amet dolor porta vulputate at non augue. Cras at sem mauris. Sed erat turpis, accumsan vitae elit eu, consectetur maximus mauris. Maecenas quam velit, dignissim sit amet aliquet id, volutpat a est.</p>
          </div>
        </div>

        {/* COLONNE DROITE : COMPÉTENCES */}
        <div className="col-md-6">
          <h3 className="section-title mb-4">Mes compétences</h3>

          <div className="skill-item mb-3">
            <span className="text-uppercase fw-medium">HTML5 90%</span>
            <div className="progress mt-1" style={{height: '8px'}}>
              <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
            </div>
          </div>

          <div className="skill-item mb-3">
            <span className="text-uppercase fw-medium">CSS3 80%</span>
            <div className="progress mt-1" style={{height: '8px'}}>
              <div className="progress-bar bg-info" style={{width: '80%'}}></div>
            </div>
          </div>

          <div className="skill-item mb-3">
            <span className="text-uppercase fw-medium">JAVASCRIPT 70%</span>
            <div className="progress mt-1" style={{height: '8px'}}>
              <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
            </div>
          </div>

          <div className="skill-item mb-3">
            <span className="text-uppercase fw-medium">PHP 60%</span>
            <div className="progress mt-1" style={{height: '8px'}}>
              <div className="progress-bar bg-success" style={{width: '60%'}}></div>
            </div>
          </div>

          <div className="skill-item mb-3">
            <span className="text-uppercase fw-medium">REACT 50%</span>
            <div className="progress mt-1" style={{height: '8px'}}>
              <div className="progress-bar bg-primary" style={{width: '50%'}}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
}

      {/* MODALE GITHUB */}
      {showModal && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light">>

              <div className="modal-header">
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
                {githubData ? (
                  <div className="d-flex flex-column flex-md-row gap-4">
                    <img
                      src={githubData.avatar_url}
                      alt="avatar GitHub"
                      style={{width: '200px', height: '200px', objectFit: 'cover'}}
                    />
                    <div className="d-flex flex-column gap-3 w-100">
                      <p className="border-bottom pb-2">
                        <i className="bi bi-person me-2"></i>
                        <a href={githubData.html_url} target="_blank" rel="noreferrer">
                          {githubData.name}
                        </a>
                      </p>
                      <p className="border-bottom pb-2">
                        <i className="bi bi-geo-alt me-2"></i>
                        {githubData.location || ''}
                      </p>
                      <p className="border-bottom pb-2">
                        <i className="bi bi-card-text me-2"></i>
                        {githubData.bio || ''}
                      </p>
                      <p className="border-bottom pb-2">
                        <i className="bi bi-collection me-2"></i>
                        Repositories : {githubData.public_repos}
                      </p>
                      <p className="border-bottom pb-2">
                        <i className="bi bi-people me-2"></i>
                        Followers : {githubData.followers}
                      </p>
                      <p className="border-bottom pb-2">
                        <i className="bi bi-people me-2"></i>
                        Following : {githubData.following}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>Chargement...</p>
                )}
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Fermer
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;