import React, { useState } from 'react';
import '../../scss/Insights.scss';
import { Helmet } from "react-helmet";

const Insights = () => {
  const [selectedContent, setSelectedContent] = useState({ header: '', detail: '' });
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleTitleClick = (detail, header, itemId) => {
    setSelectedContent({ header, detail: detail.replace(/\\n/g, '\n') });
    setSelectedItemId(itemId); // Set the selected item ID
  };

  return (
    <div className="insights-page">

    <Helmet>
      <title>Insights - Insights Into Our Ideation Consulting Services</title>
      <meta name="description" content="We provide insight into ideation process and how it improves productivity"/>
      <link rel='canonical' href='https://egobas.com/insights' />
    </Helmet>

      <h1 className="insights-page-title">Insights</h1>
      <div className="insights-container">
        <div className="insights-left-column">
          <h1 className="insights-titles-heading">Trends</h1>
          <ul className="insights-titles-list">

            <li onClick={() => handleTitleClick(
              "To ideate a successful product, focus on understanding customer needs, market trends, and gaps. Conduct thorough research, brainstorm creative solutions, prototype and test ideas, iterate based on feedback, and prioritize simplicity and user experience. Embrace innovation, collaboration, and a customer-centric approach for impactful results.\n\nContinuously refine your product concept by gathering feedback, analysing data, and staying adaptable. Embrace experimentation, iterate quickly, and remain open to new ideas to drive innovation and meet evolving market demands.\n",
              "Ideating A Physical Product",
              "product" // Unique identifier for this item
              )} className={`insights-title-item ${selectedItemId === "product" ? "selected" : ""}`}>Ideating a Product</li>

            <li onClick={() => handleTitleClick(
              "Ideating for a new service involves considering customer pain points, emerging trends, technology integration, regulatory compliance, cost-effectiveness, differentiation strategies, customer acquisition channels, feedback loops, data analytics for decision-making, and a robust service delivery framework. \n\n Additionally, focus on building a strong brand identity, fostering customer loyalty, adapting to changing market dynamics, monitoring competitors, seeking partnerships, and continuously refining your service offering for sustained success. \n\n Finally, prioritize customer satisfaction, gather testimonials, optimize service processes, invest in employee training, leverage digital tools for efficiency, track key performance indicators, adapt to feedback, and stay agile to meet evolving customer needs effectively.\n\n",
              "Service Product Insights",
              "service" // Unique identifier for this item
              )} className={`insights-title-item ${selectedItemId === "service" ? "selected" : ""}`}>Ideating a Service</li>

            <li onClick={() => handleTitleClick(
              "To create a compelling brand, start by defining your values, mission, and target audience. Conduct market research to understand competitors and consumer preferences. Develop a unique brand identity, including logo, colors, and messaging that resonate with your audience. Craft a brand story that connects emotionally, differentiates from competitors, and communicates your brand's essence effectively. Consistency across all touchpoints is key to building brand recognition and loyalty.\n\nEnsure your brand voice, visuals, and experiences align with your brand strategy. Engage with your audience authentically through social media, content marketing, and customer interactions. Monitor feedback, adapt to market trends, and evolve your brand to stay relevant and competitive. Building trust and credibility through transparency and delivering on promises will strengthen brand loyalty. Embrace innovation, creativity, and a customer-centric approach to build a strong and enduring brand presence.\n\n",
              "Branding Ideation",
              "branding" // Unique identifier for this item
              )} className={`insights-title-item ${selectedItemId === "branding" ? "selected" : ""}`}>Ideating a Brand</li>

            <li onClick={() => handleTitleClick(
              "When ideating a system, start by defining the purpose, scope, and stakeholders involved. Conduct a thorough analysis of existing systems, processes, and technologies to identify inefficiencies and opportunities for improvement. Brainstorm innovative solutions that address key pain points and enhance overall performance. Prioritize scalability, flexibility, and user-friendliness in designing the system architecture to accommodate future growth and changes effectively.\n\nIterate on system design based on feedback, testing, and continuous improvement cycles. Collaborate with cross-functional teams to ensure alignment with business goals and user needs. Implement robust monitoring and evaluation mechanisms to track system performance and gather insights for further optimization. Embrace agile methodologies, automation, and integration of cutting-edge technologies to create a resilient and adaptive system that drives efficiency and innovation within the organisation.\n\n",
              "System Ideation",
              "system" // Unique identifier for this item
              )} className={`insights-title-item ${selectedItemId === "system" ? "selected" : ""}`}>System Ideation</li>

          </ul>
        </div>
        <div className="insights-right-column">
          {selectedContent.header && <h2 className='insight-right-col-h2'>{selectedContent.header}</h2>}
          {selectedContent.detail && selectedContent.detail.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
              {line}{index < array.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
