
import React from 'react';
import './Destinations.css';

const destinations = [
  { name: 'Paris', description: 'The city of lights and love.', image: 'paris.jpg' },
  { name: 'Hawaii', description: 'Relax by the beaches and enjoy the sun.', image: 'hawaii.jpg' },
  { name: 'New York', description: 'Celebrate New Year's Eve in Times Square.', image: 'newyork.jpg' }
];

const Destinations = () => {
  return (
    <div className="destinations">
      <h1>Holiday Destinations</h1>
      <div className="destination-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <img src={dest.image} alt={dest.name} className="destination-image" />
            <h2>{dest.name}</h2>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
