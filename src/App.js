import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import SubHeader from './components/SubHeader'; // Import the SubHeader component
import HomePage from './components/HomePage'; // Import the HomePage component
import SignInPage from './components/SignInPage'; // Import the SignInPage component
import ResetPasswordPage from './components/ResetPasswordPage'; // Import the ResetPasswordPage component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header section */}
        <Header />

        {/* SubHeader navigation section */}
        <SubHeader />

        {/* Main content of your app */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} /> {/* New route for Reset Password */}
            {/* Add other routes as needed */}
          </Routes>
        </main>

        {/* Footer section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
