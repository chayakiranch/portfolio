import React from 'react';
import './Header.css'; // Import CSS if you want to style it separately

// Example placeholder for logo; you can replace it with an actual icon or logo.
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace with an actual image or SVG for your logo */}
        <img src="/images/Your_logo.png" alt="Logo" className="logo-icon" />
      </div>
      <div className="title">System Design Newsletter</div>
      <div className="actions">
        <button className="subscribe-button">Subscribe</button>
        <a href="/signin" className="signin-link">Sign in</a>
      </div>
    </header>
  );
};

export default Header;