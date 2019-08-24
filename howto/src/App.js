import React from 'react';
import './App.css';

//components
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage.js';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <HomePage />
    </div>
  );
}

export default App;
