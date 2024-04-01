import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import egobasLogo from '../../assets/images/Logo/logo.png';
import '../../scss/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={egobasLogo} alt="Logo" />
        </Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/industries" onClick={closeMenu}>Industries</Link>
        <Link to="/insights" onClick={closeMenu}>Insights</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="navbar-client-login-container">
        <a href="https://client.egobas.com/" target="_blank" rel="noopener noreferrer" className="navbar-client-login-link" onClick={closeMenu}>
        <button className="navbar-client-login">Client Login</button>
        </a>
      </div>

      <div className="navbar-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>

    </nav>
  );
};

export default Navbar;

