import React from 'react';
import './Destinations.css';

const destinations = [
  { name: 'Paris', description: 'The city of lights and love.' },
  { name: 'Hawaii', description: 'Relax by the beaches and enjoy the sun.' },
  { name: 'New York', description: 'Celebrate New Year\'s Eve in Times Square.' }  // Escape apostrophe here
];

const Destinations = () => {
  return (
    <div className="destinations">
      <h1>Holiday Destinations</h1>
      <ul>
        {destinations.map((dest, index) => (
          <li key={index}>
            <h2>{dest.name}</h2>
            <p>{dest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;