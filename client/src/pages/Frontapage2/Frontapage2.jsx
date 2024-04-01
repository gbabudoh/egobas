import React, { useState, useEffect } from 'react';
import '../../scss/Frontapage2.scss';
import { Helmet } from "react-helmet";


const gridItems = [
  { id: 1, title: 'Branding', 
  description: 'Egobas ideation branding service excels in transforming concepts into compelling brands with strong appeal. By employing strategic ideation and branding techniques, Egobas ensures businesses create impactful brand identities that deeply resonate with their target audience, fostering brand loyalty and recognition.' 
  },


  { id: 2, title: 'Service', 
  description: 'Specialising in ideating for service-based products, strategic processes are leveraged to enhance offerings. By gathering internal and external insights, a focus on continuous improvement, customer engagement, and loyalty is maintained. This innovative approach aligns products with customer needs, ensuring sustained success and growth.'},


  { id: 3, title: 'Product', 
  description: 'Tailoring product ideation for clients across diverse industries, utilising market insights, design thinking, and strategic expertise to refine ideas into market-ready products. This client-centric approach fosters creativity, adaptability, and competitive advantage, driving sustained success and innovation in product strategies.' },


  { id: 4, title: 'System', 
  description: 'We specialise in guiding clients through system ideation to boost operational efficiency, enhance output, and cut costs. Our tailored systems drive superior delivery standards, process optimization, and heightened productivity, ensuring sustained success and competitive edge.' },


  { id: 5, title: 'Process', 
  description: 'We support businesses, government agencies, and entrepreneurs in enhancing operations through innovative thinking. Adapting to evolving demands, we help clients refine processes for improved efficiency, productivity, and cost-effectiveness. This ensures seamless functionality and readiness for market changes.'},


  { id: 6, title: 'Structure', 
  description: 'Our structured ideation process is instrumental in creating sustainable structures for businesses. By fostering innovation and strategic thinking, we empower clients to uphold a competitive edge in the evolving business landscape, ensuring enduring success and resilience in the long term.'},
];



const colors = [
  '#646369',
  '#ff6f69',
  '#e69d00', 
  '#338078',
  '#7462d0',
  '#2d7086',
  '#e69e19' , 
];

const FrontPage2 = () => {
  const [flipped, setFlipped] = useState(Array(gridItems.length).fill(false));
  const [colorStates, setColorStates] = useState(Array(gridItems.length).fill('darkgrey'));
  const [frontColors, setFrontColors] = useState(Array(gridItems.length).fill(''));
  const [backColors, setBackColors] = useState(Array(gridItems.length).fill('')); // New state for back colors

  // Function to assign a random color to each grid item for front, back, and general background
  const assignRandomColors = () => {
    const newColorStates = colorStates.map(() => colors[Math.floor(Math.random() * colors.length)]);
    const newFrontColors = frontColors.map(() => colors[Math.floor(Math.random() * colors.length)]);
    const newBackColors = backColors.map(() => colors[Math.floor(Math.random() * colors.length)]); // Assign random color for the back
    setColorStates(newColorStates);
    setFrontColors(newFrontColors);
    setBackColors(newBackColors); // Set the new back colors
  };

  // Assign a random color to each grid item at intervals
  useEffect(() => {
    assignRandomColors(); // Initial random assignment
    const interval = setInterval(assignRandomColors, 2000); // Change interval as needed

    return () => clearInterval(interval);
  }, []);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="front-page2">

    <Helmet>
      <title>Egobas - Ideation Consultancy</title>
      <meta name="description" content="Egobas specialises in empowering startups, SMEs, and corporations with innovative solutions for growth and overcoming challenges." />
      <link rel='canonical' href='https://egobas.com/' />
    </Helmet>


      {gridItems.map((item, index) => (
        <div
          className={`grid-item ${flipped[index] ? 'flipped' : ''}`}
          key={item.id}
          onClick={() => handleFlip(index)}
          style={{ backgroundColor: colorStates[index] }} // Apply background color state for the whole item
        >
          <div className="front" style={{ backgroundColor: frontColors[index] }}> {/* Apply a specific color for the front */}
            <h1>{item.title}</h1>
          </div>
          <div className="back" style={{ backgroundColor: backColors[index] }}> {/* Apply a specific color for the back */}
            <h2 className='front-page2-h2'>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontPage2;