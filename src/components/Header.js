import React from 'react';
import './Header.css'; // Import CSS if you want to style it separately

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Ensure the src path is correct for your project setup */}
        <img src="/images/Your_logo.png" alt="System Design Logo" className="logo-icon" />
      </div>
      <h1 className="title">System Design Newsletter</h1>
      <div className="actions">
        <button className="subscribe-button" aria-label="Subscribe to the newsletter">Subscribe</button>
        <a href="/signin" className="signin-link" aria-label="Sign in to your account">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
