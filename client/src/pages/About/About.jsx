import React, { useEffect, useState } from 'react';
import '../../scss/About.scss';
import image1 from '../../assets/images/FrontRight/frontimage1.jpg';
import image2 from '../../assets/images/FrontRight/frontimage2.jpg';
import image3 from '../../assets/images/FrontRight/frontimage3.jpg';
import { Helmet } from "react-helmet";


const About = () => {

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const bubbleColors = [
    'rgba(255, 182, 193, 0.4)', // Light pink
    'rgba(255, 255, 224, 0.4)', // Light yellow
    'rgba(135, 206, 250, 0.4)', // Light sky blue
    'rgba(211, 211, 211, 0.4)', // Light grey
    'rgba(250, 250, 210, 0.4)'  // Light lemon
  ];

  const getRandomColor = () => bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

  return (
    <div className="about">

    <Helmet>
      <title>About - Egobas Limited Empowering Innovation in Business</title>
      <meta name="description" content="Egobas Limited is an ideation consulting firm. Let's help you succeed." />
      <link rel='canonical' href='https://egobas.com/about' />
    </Helmet>



      <div className="page-banner">About Us</div>
      <div className="content">
        <div className="left-column">
          <h1 className='left-column-h1'>What We Do</h1>
          <p className='about-left-column-p'>
          Egobas Ideation Consulting Firm stands at the forefront of innovative business solutions, offering specialised ideation services designed to tackle complex challenges. Since its inception, Egobas has been dedicated to empowering businesses across various sectors, including startups, SMEs, corporations, and governmental agencies, by providing bespoke strategies for the creation of novel solutions, services, products, systems, patterns, and structures. Our approach, rooted in deep industry knowledge and creative thinking, has not only weathered the test of time but has also adapted to the advancements in digital transformation. Popularised for its unique methodology, Egobas leverages a blend of traditional wisdom and cutting-edge technologies to foster an environment where creativity flourishes. With tools and techniques tailored to the specific needs of each client, Egobas Ideation Consulting Firm ensures that every venture, no matter its size or scope, is equipped with the insights and innovation needed to succeed in today's competitive landscape. Our legacy is built on a foundation of success stories, reflecting our commitment to turning visionary ideas into tangible results.
          </p>
        </div>
        <div className="right-column">
          <img src={images[activeImageIndex]} alt="Dynamic display" />
        </div>
      </div>
      <div className="bubbles">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={`bubble ${index % 2 === 0 ? 'big' : 'small'}`} style={{ backgroundColor: getRandomColor(), top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>
      {/* Single grid column with updates */}
      <div className="single-grid-column">
        <h1>Our History</h1>
      <div className="grid-container">
        <div className="grid-column left">
        <img className='image-hisroty' src={image3} alt="Our History" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="grid-column right">
      <h2 className='left-column-second-child-h2'>How We Started</h2>
        <p className='left-column-second-child-p'>
        In 2018, Egobas Limited recognised a surge in demand for creative solutions to complex challenges across industries. To address this, they launched their ideation consulting service, empowering businesses to unlock innovation through collaborative brainstorming and strategic thinking. This approach has transformed how companies approach problem-solving, leading to impactful solutions and a culture of continuous improvement.
        <p><br/><br/>  
          <p>
          <h3>FOCUS</h3><br/>
          Supporting MSMEs, SMEs, Corporations, Charities, Government Agencies, Entrepreneurs, and Startups in realising their visions and goals. Through ideation, every business, regardless of size, finds success with us because your achievement is our concern.
          </p>      
        </p>
        </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;

