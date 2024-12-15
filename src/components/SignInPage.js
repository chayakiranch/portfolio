import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
  const [showPasswordField, setShowPasswordField] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPasswordField(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission, like API calls for authentication
    // For now, just navigate to the home page after submission
    navigate('/home'); // Redirect to the homepage or a protected route
  };

  return (
    <div className="signin-container">
      {/* Logo that links to the home page */}
      <Link to="/" className="signin-logo">
        <img src="/images/Your_logo.png" alt="System Design Logo" className="logo" />
      </Link>

      <h1>Sign in to System Design Newsletter</h1>

      <form className="signin-form" onSubmit={handleSubmit}> {/* Ensure handleSubmit is connected */}
        <input type="email" placeholder="Email" required />
        {showPasswordField && <input type="password" placeholder="Password" required />}
        
        {!showPasswordField && (
          <button
            type="button"
            className="link-button"
            onClick={handleTogglePassword}
          >
            Sign in with password
          </button>
        )}
        
        {showPasswordField && (
          <button type="submit" className="signin-button">
            Continue
          </button>
        )}
      </form>

      {showPasswordField && (
        <div className="signin-options">
          <a href="/reset-password" className="option-link">Set a new password</a>
          <button 
            type="button" 
            className="link-button" 
            onClick={() => setShowPasswordField(false)}>
            Sign in with email
          </button>
        </div>
      )}

      <p>
        First time here? <a href="/create-account">Create an account</a>
      </p>
    </div>
  );
};

export default SignInPage;
