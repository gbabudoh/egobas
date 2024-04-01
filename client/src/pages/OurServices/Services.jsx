import React, { useState } from 'react';
import '../../scss/Services.scss';
import { Helmet } from "react-helmet";

const serviceData = [

  { title: 'Branding', 
  description: 'Egobas ideation branding service excels in transforming concepts into compelling brands with strong appeal. By employing strategic ideation and branding techniques, Egobas ensures businesses create impactful brand identities that deeply resonate with their target audience, fostering brand loyalty and recognition.'},


  { title: 'Service', 
  description: 'Specialising in ideating for service-based products, strategic processes are leveraged to enhance offerings. By gathering internal and external insights, a focus on continuous improvement, customer engagement, and loyalty is maintained. This innovative approach aligns products with customer needs, ensuring sustained success and growth.'},


  { title: 'Product', 
  description: 'Egobas tailors product ideation services for clients across diverse industries, utilising market insights, design thinking, and strategic expertise to refine ideas into market-ready products. This client-centric approach fosters creativity, adaptability, and competitive advantage, driving sustained success and innovation in product strategies.'},


  { title: 'System', 
  description: 'At Egobas, we specialise in guiding clients through system ideation to boost operational efficiency, enhance output, and cut costs. Our tailored systems drive superior delivery standards, process optimization, and heightened productivity, ensuring sustained success and competitive edge.'},


  { title: 'Process', 
  description: 'At Egobas, we support businesses, government agencies, and entrepreneurs in enhancing operations through innovative thinking. Adapting to evolving demands, we help clients refine processes for improved efficiency, productivity, and cost-effectiveness. This ensures seamless functionality and readiness for market changes.'},


  { title: 'Structure', 
  description: 'At Egobas, our structured ideation process is instrumental in creating sustainable structures for businesses. By fostering innovation and strategic thinking, we empower clients to uphold a competitive edge in the evolving business landscape, ensuring enduring success and resilience in the long term.' },
  // Add additional services as needed
];

const ServiceCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipToFront = () => setIsFlipped(false);
  const handleFlipToBack = () => setIsFlipped(true);

  return (
    <div className={`service-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-front" onClick={handleFlipToBack}>
        <h1>{title}</h1>
        <button>Find out more →</button>
      </div>
      <div className="card-back">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="back-button" onClick={handleFlipToFront}>Back</button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services">

    <Helmet>
      <title>Services - Ideation Consultancy </title>
      <meta name="description" content="We provide ideation consulting services to various industries"/>
      <link rel='canonical' href='https://egobas.com/insights' />
    </Helmet>

      <div className="page-header">
        <h1>What We Offer You</h1>
      </div>
      <div className="service-grid">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
