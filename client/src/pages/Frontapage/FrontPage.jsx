import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../scss/FrontPage.scss';
import { Helmet } from "react-helmet";

const FrontPage = () => {
  const [circleBallStyles, setCircleBallStyles] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const diameter = 300;
    const radius = diameter / 2;
    const ballDiameter = 80;
    const numOfBalls = 6;
    const angleIncrement = (2 * Math.PI) / numOfBalls;

    const ballStyles = Array.from({ length: numOfBalls }).map((_, index) => {
      const angle = angleIncrement * index;
      const effectiveRadius = radius - (ballDiameter / 4);

      const x = radius + effectiveRadius * Math.cos(angle);
      const y = radius + effectiveRadius * Math.sin(angle);

      return {
        left: `${x}px`,
        top: `${y}px`,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        width: `${ballDiameter}px`,
        height: `${ballDiameter}px`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#333',
      };
    });

    setCircleBallStyles(ballStyles);

    const bubbleCount = 50; // Adjust for more or fewer bubbles
    const generatedBubbles = Array.from({ length: bubbleCount }).map((_, index) => ({
      id: index,
      size: Math.random() * (120 - 20) + 20, // Random size between 20px and 120px
      top: Math.random() * 100, // Random top position in percentage
      left: Math.random() * 100, // Random left position in percentage
      opacity: Math.random() * (0.5 - 0.1) + 0.1, // Random opacity between 0.1 and 0.5
      animationDuration: `${Math.random() * (30 - 10) + 10}s`, // Random duration between 10s and 30s
      animationDelay: `${Math.random() * 5}s`, // Random delay up to 5 seconds
    }));

    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="front-page">

    <Helmet>
      <title>Egobas - Ideation Consultancy</title>
      <meta name="description" content="Discover how Egobas, a leading Ideation Consulting Firm, specializes in empowering startups, SMEs, and corporations with innovative solutions for growth and overcoming challenges." />
      <link rel='canonical' href='https://egobas.com/' />
    </Helmet>

      {bubbles.map(bubble => (
        <div 
          key={bubble.id} 
          className="bubble" 
          style={{
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            opacity: bubble.opacity,
            '--animation-duration': bubble.animationDuration,
            '--animation-delay': bubble.animationDelay,
          }}
        ></div>
      ))}
      <div className="grid-container">
        <div className="left-column">
          <h1 className='front-page-h1'>INNOVATIVE IDEATION</h1>
          <h2 className='front-page-h2'>we make complex ideation simple</h2>
          <p className='front-page-p'>Let's explore boundless possibilities.</p>
          {/* CTA Button linked to Consultation page */}
          <Link to="/consultation" className="cta-button">Get Free Consultation Now</Link>
        </div>
        <div className="right-column">
          {/* Rotating circles logic remains unchanged */}
          <div className="rotating-circle">
            {circleBallStyles.map((style, index) => (
              <div key={index} className="circle-ball" style={style}>
                {['Brand', 'Product', 'Process', 'Service', 'System', 'Structure'][index]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
