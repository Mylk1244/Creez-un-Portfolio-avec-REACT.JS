import React, { useState } from 'react';
import '../styles/Home.css';
 
function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
  };
 
  return (
    <main>
      <section className="py-5 mt-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-1">Contact</h2>
          <p className="text-muted mb-2">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="section-divider mx-auto mb-5" />
 
          <div className="card shadow-sm p-4 text-start">
            <div className="row">
              {/* Formulaire */}
              <div className="col-md-6 border-end pe-4">
                <h5 className="fw-bold mb-3">Formulaire de contact</h5>
                <hr className="section-divider mb-4" />
 
                <div onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Votre adresse email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="telephone"
                      className="form-control"
                      placeholder="Votre numéro de téléphone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="sujet"
                      className="form-control"
                      placeholder="Sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Votre message"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary px-4"
                      onClick={handleSubmit}
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
 
              {/* Coordonnées */}
              <div className="col-md-6 ps-4">
                <h5 className="fw-bold mb-3">Mes coordonnées</h5>
                <hr className="section-divider mb-4" />
 
                <p className="fw-bold mb-3">John Doe</p>
                <p className="mb-1">🏢 40 rue Laure Diebold</p>
                <p className="mb-1">📍 69009 Lyon, France</p>
                <p className="mb-1">📞 10 20 30 40 50</p>
                <p className="mb-4">✉️ john.doe@gmail.com</p>
 
                {/* Google Maps iframe */}
                <iframe
                  title="Google Maps - John Doe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8!2d4.804!3d45.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea9c4e2e7c3b%3A0x1234!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="330"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 
export default Contact;