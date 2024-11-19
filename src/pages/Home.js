
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
      </div>
      <div className="home-content">
        <h1>Welcome to Holiday Bliss!</h1>
        <p>Celebrate the joy of holidays with us.</p>
      </div>
    </div>
  );
};

export default Home;
