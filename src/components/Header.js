import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const menuItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Mentions Légales', to: '/mentions-legales' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-uppercase fw-bold" to="/" onClick={closeNav}>
            JOHN DOE
          </NavLink>

          <div className={`collapse navbar-collapse justify-content-end${navOpen ? ' show' : ''}`}>
            <ul className="navbar-nav text-uppercase">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  {item.isAnchor ? (
                    <a className="nav-link" href={item.to} onClick={closeNav}>
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' active' : ''}`
                      }
                      to={item.to}
                      onClick={closeNav}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;