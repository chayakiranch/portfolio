import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <div className="subheader-container">
      <div className="subheader-navigation">
        <a href="/" className="nav-link">Home</a>
        <a href="/sponsorship" className="nav-link">Sponsorship</a>
        <a href="/leaderboard" className="nav-link">Leaderboard</a>
        <a href="/about" className="nav-link">About</a>
      </div>
    </div>
  );
};

export default SubHeader;
