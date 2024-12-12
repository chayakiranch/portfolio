import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css'; // Import CSS if you want to style it separately

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {/* Wrap the logo in Link */}
          <img src="/images/Your_logo.png" alt="System Design Logo" className="logo-icon" />
        </Link>
      </div>
      {/* Wrap the "System Design Newsletter" title in Link */}
      <Link to="/" className="title-link">
        <h1 className="title">System Design Newsletter</h1>
      </Link>
      <div className="actions">
        <button className="subscribe-button" aria-label="Subscribe to the newsletter">Subscribe</button>
        <a href="/signin" className="signin-link" aria-label="Sign in to your account">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
