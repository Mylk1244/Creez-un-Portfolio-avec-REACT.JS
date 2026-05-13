import React, { useState } from 'react';
import '../styles/Home.css';
 
function MentionsLegales() {
  const [openItem, setOpenItem] = useState(null);
 
  const toggle = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
 
  const items = [
    {
      id: 'editeur',
      title: 'Editeur du site',
      content: (
        <div>
          <h5 className="fw-bold">John Doe</h5>
          <p className="mb-1">🏢 40 rue Laure Diebold</p>
          <p className="mb-1">📍 69009 Lyon, France</p>
          <p className="mb-1">📞 10 20 30 40 50</p>
          <p className="mb-0">✉️ john.doe@gmail.com</p>
        </div>
      ),
    },
    {
      id: 'hebergeur',
      title: 'Hébergeur',
      content: (
        <div>
          <h5 className="fw-bold">alwaysdata</h5>
          <p className="mb-1">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
          <p className="mb-0">
            🌐{' '}
            <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
              www.alwaysdata.com
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'credits',
      title: 'Crédits',
      content: (
        <div>
          <h5 className="fw-bold">Crédits</h5>
          <p>
            Ce site a été réalisé par John Doe, étudiant au{' '}
            <a href="https://www.cef.fr" target="_blank" rel="noreferrer">
              Centre Européen de formation
            </a>
            .
          </p>
          <p>
            <em>
              Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
              <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                Pixabay
              </a>
            </em>
          </p>
          <p>
            <em>
              La favicon de ce site a été fournie par{' '}
              <a
                href="https://www.flaticon.com/fr/icones-gratuites/john-doe"
                target="_blank"
                rel="noreferrer"
              >
                John doe Icons erstellt von Freepik - Flaticon
              </a>
            </em>
          </p>
        </div>
      ),
    },
  ];
 
  return (
    <main className="mt-5 py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Mentions légales</h2>
        <hr className="section-divider mx-auto mb-5" />
 
        <div className="accordion-custom">
          {items.map((item) => (
            <div key={item.id} className="accordion-item-custom mb-0">
              <button
                className={`accordion-header-custom w-100 d-flex justify-content-between align-items-center p-3 border ${
                  openItem === item.id ? 'accordion-active' : ''
                }`}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <span>{openItem === item.id ? '∧' : '∨'}</span>
              </button>
              {openItem === item.id && (
                <div className="accordion-body-custom p-4 border border-top-0">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
 
export default MentionsLegales;