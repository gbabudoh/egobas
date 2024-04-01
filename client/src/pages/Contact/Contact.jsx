import React from 'react';
import '../../scss/Contact.scss';
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact-page">

    <Helmet>
      <title>Contact - Contact Egobas Limited</title>
      <meta name="description" content="Contact us today to discuss your needs and requirements"/>
      <link rel='canonical' href='https://egobas.com/contact' />
    </Helmet>



      <div className="contact-column">
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p>71 - 75 Sloan Square, Covent Garden</p>
          <p>London SW1 9WX</p>
          <p>Tel: +44 7814483083</p>
          <p>Email: <a href="mailto:info@egobas.com">info@egobas.com</a></p>
          <p>Website: <a href="http://www.egobas.com">www.egobas.com</a></p>
        </div>
        <div className="map">
          <img src="./src/assets/images/Map/map.png" alt="Map" />
        </div>
      </div>
      <div className="contact-column">
        {/* Embed WordPress form using iframe with scrolling enabled */}
        <iframe 
          src="https://form.egobas.com/contact/" 
          width="100%" 
          height="600" // Adjust based on the content height
          style={{border: "none", overflow: "auto", borderRadius: "9px",}} // Added borderRadius style here
          scrolling="yes" // Allows scrolling within the iframe
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
