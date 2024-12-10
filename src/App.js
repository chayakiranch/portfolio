import React from 'react';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import SubHeader from './components/SubHeader'; // Import the SubHeader component

function App() {
  return (
    <div className="App">
      {/* Header section */}
      <Header />
      
      {/* SubHeader navigation section */}
      <SubHeader />
      
      {/* Main content of your app */}
      <main>
        {/* Add main content here */}
      </main>
      
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
