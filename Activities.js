
import React from 'react';
import './Activities.css';

const activities = [
  { name: 'Skiing', icon: '⛷️', description: 'Hit the slopes this winter!' },
  { name: 'Beach Party', icon: '🏖️', description: 'Enjoy sun, sand, and surf.' },
  { name: 'City Tours', icon: '🏙️', description: 'Explore urban wonders.' }
];

const Activities = () => {
  return (
    <div className="activities">
      <h1>Holiday Activities</h1>
      <div className="activities-grid">
        {activities.map((act, index) => (
          <div className="activity-card" key={index}>
            <span className="activity-icon">{act.icon}</span>
            <h2>{act.name}</h2>
            <p>{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
