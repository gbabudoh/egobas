import React from 'react';
// Import icons
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import '../../scss/Footer.scss'; // Import SCSS styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>FOCUS</h3>
        <ul>
        <a className="footer-service-link" href="/industries">Various Industries</a>          
        </ul>
      </div>
      <div className="footer-column">
        <h3>SERVICES</h3>
        <ul>
        <a className='footer-service-link' href="/services">Ideation Services</a>
        </ul>
      </div>
      <div className="footer-column">
        <h3>SOCIAL</h3>        
        <div className="social-icons">
        
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FiFacebook />
        </a>
          
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>

        </div>
        <p>Email: <a className='footer-email-link' href="mailto:godwin@egobas.com">godwin@egobas.com</a></p>
        <p>Tel: +44 781 4483083</p>
      </div>
    </footer>
  );
};

export default Footer;
