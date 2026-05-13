import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">

          {/* Colonne 1 : Coordonnées */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title text-white">John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <div className="footer-icons">
              <a className="text-secondary" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a className="text-secondary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="text-secondary"  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens Utiles */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title text-white">Liens utiles</h5>
            <ul className="footer-list">
              <li><Link className="text-light" to="/">Accueil</Link></li>
              <li><Link className="text-light" to="/services">Services</Link></li>
              <li><Link className="text-light" to="/portfolio">Portfolio</Link></li>
              <li><Link className="text-light" to="/contact">Me contacter</Link></li>
              <li><Link className="text-light" to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title text-white">Mes dernières réalisations</h5>
            <ul className="footer-list">
              <li><Link className="text-light" to="#">Fresh Food</Link></li>
              <li><Link className="text-light" to="#">Restaurant Akira</Link></li>
              <li><Link className="text-light" to="#">Espace bien-être</Link></li>
              <li><Link className="text-light" to="#">SEO</Link></li>
              <li><Link className="text-light" to="#">Création d'une API</Link></li>
              <li><Link className="text-light" to="#">Maquette d'un site</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;