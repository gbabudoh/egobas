import React, { useState } from 'react'; // Keep useState for form field management
import '../../scss/ClientLogin.scss';
import logoImage from '../../assets/images/egobas-icon/icon.png';
import { Helmet } from "react-helmet";

const ClientLogin = () => {
  const [businessName, setBusinessName] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Form submission is currently disabled.');
  };

  return (
    <div className="client-login">

      <Helmet>
        <title>Client Login - Client Login To Get Report</title>
        <meta name="description" content="Contact us today to discuss your needs and requirements"/>
        <link rel='canonical' href='https://client.egobas.com/' />
      </Helmet>

      <h1 className="page-title">Client Login</h1>
      <div className="content">
        <div className="grid-container">
          <div className="left-column">
            <img src={logoImage} alt="Logo" className="logo" />
            <h2>Client Login</h2>
            <p className="client-login-p">
              Client login here to access client progress report.
            </p>
          </div>
          <div className="right-column">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passcode">Passcode</label>
                <input
                  type="password"
                  id="passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                />
              </div>
              <button type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
