import React from 'react';
import './Features.css';
import GraphImage from '../../assets/graph.png';


const Features = () => {
  return (
    <div className="features-container">
      <h2>Features</h2>
      <div className="feature-item">
        <h3>Daily Price Tracking</h3>
        <p>Track the daily prices of your favorite cryptocurrencies with real-time updates.</p>
      </div>
      <div className="feature-item">
        <h3>Price Graph of Previous 30 Days</h3>
        <p>Visualize the price trends of cryptocurrencies over the past 30 days.</p>
        {/* Placeholder for graph */}
        <div className="graph-placeholder">
          
        <img src={GraphImage} alt="Price Graph" className="graph-image" />
        </div>
      </div>
      <div className="feature-item">
        <h3>Currency Conversion</h3>
        <p>Convert cryptocurrency prices to USD, INR, and EUR effortlessly.</p>
      </div>
      <div className="feature-item">
        <h3>Detailed Cryptocurrency Information</h3>
        <p>Get in-depth details about each cryptocurrency including market cap, volume, and historical data.</p>
        {/* Placeholder for detailed information */}
      </div>
    </div>
  );
};

export default Features;
