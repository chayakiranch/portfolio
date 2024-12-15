import React, { useState } from 'react';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the reset password email can be added here.
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="reset-password-container">
      <h1>Set a new password</h1>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="reset-password-button">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
