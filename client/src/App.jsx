import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initGA } from './utils/GoogleAnalytics'; // Import the GA initialization function
import useTrackPageViews from './hooks/trackPageViews'; // Import the custom hook for page tracking

// Pages and components
import Home from './pages/Frontapage/Home';
import Navbar from './components/Header/Navbar';
import About from './pages/About/About';
import Services from './pages/OurServices/Services';
import Contact from './pages/Contact/Contact';
import Insights from './pages/insights/Insights';
import Consultation from './components/Consultation/Consultation';
import Footer from './components/Footer/Footer';
//import ClientLogin from './pages/ClientLogin/ClientLogin';
import Industries from './pages/Industries/Industries';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  useTrackPageViews(); // Call the custom hook to track page views

  useEffect(() => {
    initGA(); // Initialize Google Analytics when the component mounts
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

