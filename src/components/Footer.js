import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate(); // Hook to programmatically navigate to routes

  const handleStartWritingClick = () => {
    navigate('/posts'); // Navigate to the PostsPage
  };

  return (
    <footer className="footer">
      <div className="subscribe-section">
        <h2>Ready for more?</h2>
        <div className="subscribe-input">
          <input type="email" placeholder="Type your email..." />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
      <p>
  © 2024 Neo Kim • 
  <a href="/privacy-policy">Privacy</a> • 
  <a href="/terms-of-service">Terms</a> • 
  <a href="/collection-notice">Collection notice</a>
  {/* Replace href values with actual URLs once they are available */}
</p>
        <div className="footer-buttons">
          <button onClick={handleStartWritingClick}>Start Writing</button>
          <button>Get the app</button>
        </div>
        <p>Substack is the home for great culture</p>
      </div>
    </footer>
  );
}

export default Footer;
