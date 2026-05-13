import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
 
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand fw-bold" to="/">JOHN DOE</NavLink>
 
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/portfolio"
                onClick={() => setMenuOpen(false)}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/mentions-legales"
                onClick={() => setMenuOpen(false)}
              >
                MENTIONS LEGALES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Header;