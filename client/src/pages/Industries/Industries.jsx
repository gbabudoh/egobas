import React from 'react';
import '../../scss/Industries.scss'; // Ensure this path is correct
import { Helmet } from "react-helmet";

//import industries images
import manufacImage from '../../assets/images/industries/manufacturing.jpg'
import marketresImage from '../../assets/images/industries/marketresearch.jpg'
import techImage from '../../assets/images/industries/technology.jpg'
import productionImage from '../../assets/images/industries/production.jpg'
import industrialImage from '../../assets/images/industries/industrial.jpg'
import agriculturelImage from '../../assets/images/industries/agriculture.jpg'
import managementImage from '../../assets/images/industries/management.jpg'
import constructionImage from '../../assets/images/industries/construction.jpg'
import miningImage from '../../assets/images/industries/mining.jpg'
import foodImage from '../../assets/images/industries/food.jpg'
import healthcareImage from '../../assets/images/industries/healthcare.jpg'
import transportImage from '../../assets/images/industries/transport.jpg'
import financialImage from '../../assets/images/industries/financial.jpg'
import tradeImage from '../../assets/images/industries/trade.jpg'
import forestryImage from '../../assets/images/industries/forestry.jpg'
import educationImage from '../../assets/images/industries/education.jpg'
import marketingImage from '../../assets/images/industries/marketing.jpg'
import roboticsImage from '../../assets/images/industries/robotics.jpg'
import retailImage from '../../assets/images/industries/retail.jpg'
import commerceImage from '../../assets/images/industries/commerce.jpg'
import energyImage from '../../assets/images/industries/energy.jpg'
import foodservicesImage from '../../assets/images/industries/foodservices.jpg'
import servicesImage from '../../assets/images/industries/services.jpg'
import economicsImage from '../../assets/images/industries/economics.jpg'
import aerospaceImage from '../../assets/images/industries/aerospace.jpg'
import insuranceImage from '../../assets/images/industries/insurance.jpg'
import investmentImage from '../../assets/images/industries/investment.jpg'
import logisticsImage from '../../assets/images/industries/logistics.jpg'
import hrImage from '../../assets/images/industries/human-resources.jpg'
import computersImage from '../../assets/images/industries/computers.jpg'
import telecomsImage from '../../assets/images/industries/telecoms.jpg'
import hospitalityImage from '../../assets/images/industries/hospitality.jpg'
import goodsImage from '../../assets/images/industries/goods.jpg'
import mediaImage from '../../assets/images/industries/media.jpg'
import advertisingImage from '../../assets/images/industries/advertising.jpg'
import ecommerceImage from '../../assets/images/industries/ecommerce.jpg'
import pharmImage from '../../assets/images/industries/pharmaceutics.jpg'
import chemicalImage from '../../assets/images/industries/chemical.jpg'
import engineeringImage from '../../assets/images/industries/engineering.jpg'
import fisheryImage from '../../assets/images/industries/fishery.jpg'
import fashionImage from '../../assets/images/industries/fashion.jpg'
import realestateImage from '../../assets/images/industries/real-estate.jpg'



const Industries = () => {
  const industriesData = [
    { id: 1, name: 'Manufacturing', imageUrl: manufacImage },
    { id: 2, name: 'Technology', imageUrl: techImage },   
    { id: 12, name: 'Finance', imageUrl: marketresImage },
    { id: 12, name: 'Production', imageUrl: productionImage },
    { id: 12, name: 'Industrial', imageUrl: industrialImage },
    { id: 12, name: 'Agriculture', imageUrl: agriculturelImage },
    { id: 12, name: 'Management', imageUrl: managementImage },
    { id: 12, name: 'Construction', imageUrl: constructionImage },
    { id: 12, name: 'Mining', imageUrl: miningImage },
    { id: 12, name: 'Food', imageUrl: foodImage },
    { id: 12, name: 'Healthcare', imageUrl: healthcareImage },
    { id: 12, name: 'Transport', imageUrl: transportImage },
    { id: 12, name: 'Financial Services', imageUrl: financialImage },
    { id: 12, name: 'Trade', imageUrl: tradeImage },
    { id: 12, name: 'Forestry', imageUrl: forestryImage },
    { id: 12, name: 'Education', imageUrl: educationImage },
    { id: 12, name: 'Marketing', imageUrl: marketingImage },
    { id: 12, name: 'Robotics', imageUrl: roboticsImage },
    { id: 12, name: 'Retail', imageUrl: retailImage },
    { id: 12, name: 'Commerce', imageUrl: commerceImage },
    { id: 12, name: 'Energy', imageUrl: energyImage },
    { id: 12, name: 'Food Service', imageUrl: foodservicesImage },
    { id: 12, name: 'Service Industry', imageUrl: servicesImage },
    { id: 12, name: 'Economics', imageUrl: economicsImage },
    { id: 12, name: 'Aerospace', imageUrl: aerospaceImage },
    { id: 12, name: 'Insurance', imageUrl: insuranceImage },
    { id: 12, name: 'Investment', imageUrl: investmentImage },
    { id: 12, name: 'Logistics', imageUrl: logisticsImage },
    { id: 12, name: 'Human Resources', imageUrl: hrImage },
    { id: 12, name: 'Computers', imageUrl: computersImage },
    { id: 12, name: 'Telecommunications', imageUrl: telecomsImage },
    { id: 12, name: 'Hospitality', imageUrl: hospitalityImage },
    { id: 12, name: 'Goods', imageUrl: goodsImage },
    { id: 12, name: 'Media', imageUrl: mediaImage },
    { id: 12, name: 'Advertising', imageUrl: advertisingImage },
    { id: 12, name: 'E-commerce', imageUrl: ecommerceImage },
    { id: 12, name: 'Pharmaceutics', imageUrl: pharmImage },
    { id: 12, name: 'Chemical', imageUrl: chemicalImage },
    { id: 12, name: 'Engineering', imageUrl: engineeringImage },
    { id: 12, name: 'Fishery', imageUrl: fisheryImage },
    { id: 12, name: 'Fashion', imageUrl: fashionImage },
    { id: 12, name: 'Real Estate', imageUrl: realestateImage },

    
     // Continue with your data...
  ];

  return (     
    <div className="industries">  

    <Helmet>
      <title>Industries - We Offer Ideation Services To Various Industries</title>
      <meta name="description" content="We offer ideation services to various industries and sectors"/>
      <link rel='canonical' href='https://egobas.com/industries' />
    </Helmet>


      <h1 className="industries__title">Industry Focus</h1>
      <div className="industries__grid">
        {industriesData.map((industry) => (
          <div key={industry.id} className="industries__grid__item">
            <img className='industries-image-insert' src={industry.imageUrl} alt={industry.name} />
            <h3>{industry.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
