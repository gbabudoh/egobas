import React from 'react';
import '../../scss/Consultation.scss';

const Consultation = () => {
  // URL of the WordPress form
  const formUrl = "https://form.egobas.com/client-consultation/";

  return (
    <div className="consultation">
      <h2>Client Consultation Form</h2>
      {/* Embed the WordPress form using an iframe */}
      <iframe 
        src={formUrl} 
        width="100%" 
        height="610" // Adjust the height as necessary
        style={{border: 'none'}}
        title="Consultation Form"
      >
        {/* Fallback content in case iframes are not supported */}
        Your browser does not support iframes. Please visit the consultation form directly at <a href={formUrl}>this link</a>.
      </iframe>
    </div>
  );
};

export default Consultation;


