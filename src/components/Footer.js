import React from 'react';
import './Footer.css';

function Footer() {
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
        <p>© 2024 Neo Kim • <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Collection notice</a></p>
        <div className="footer-buttons">
          <button>Start Writing</button>
          <button>Get the app</button>
        </div>
        <p>Substack is the home for great culture</p>
      </div>
    </footer>
  );
}

export default Footer;
