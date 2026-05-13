import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
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
  }
  }
>
  <div className="container">
    <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
    <h2 className="display-6 fw-bold mb-4">Développeur web full stack</h2>
    <button className="btn btn-danger text-uppercase px-4 py-2">En savoir plus</button>
  </div>
</section>
      {/* SECTION CONTENU (A PROPOS + COMPÉTENCES) */}
<section className="py-5 bg-light">
  <div className="container">
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
          <p>Curabitur a scelerisque nisi. Nullam et pharetra erat. Vivamus id lorem et quam laoreet pharetra. Aenean vitae venenatis augue. Vivamus ac ipsum quis felis condimentum hendrerit. Proin lacinia viverra lacus ut mattis. Nunc vel ornare arcu. Nunc quis maximus leo, non vehicula tortor.</p>
          <p>Fusce at bibendum ex. Nulla tristique diam sed sem eleifend, nec congue leo gravida. Aenean sed eros in purus sollicitudin sodales in sit amet ex. Nulla viverra euismod mi ut finibus. In et auctor arcu.</p>
          <p>Suspendisse tincidunt metus eget velit mattis, sit amet auctor enim interdum. Vestibulum vitae felis interdum, aliquet nibh in, suscipit sem. Morbi suscipit tortor diam, sagittis blandit felis consequat et.</p>
        </div>
      </div>

      {/* COLONNE DROITE : COMPÉTENCES */}
      <div className="col-md-6">
        <h3 className="section-title mb-4">Mes compétences</h3>

        <div className="skill-item mb-3">
          <span className="text-uppercase fw-medium">HTML5 90%</span>
          <div className="progress mt-1" style={{height: '12px'}}>
            <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <span className="text-uppercase fw-medium">CSS3 80%</span>
          <div className="progress mt-1" style={{height: '12px'}}>
            <div className="progress-bar bg-info" style={{width: '80%'}}></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <span className="text-uppercase fw-medium">JAVASCRIPT 70%</span>
          <div className="progress mt-1" style={{height: '12px'}}>
            <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <span className="text-uppercase fw-medium">PHP 60%</span>
          <div className="progress mt-1" style={{height: '12px'}}>
            <div className="progress-bar bg-success" style={{width: '60%'}}></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <span className="text-uppercase fw-medium">REACT 50%</span>
          <div className="progress mt-1" style={{height: '12px'}}>
            <div className="progress-bar" style={{width: '50%'}}></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;