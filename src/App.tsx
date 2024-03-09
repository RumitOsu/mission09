import React from 'react';
import './App.css';
import Header from './components/Header';
import TeamList from './components/TeamList';

// The main App component that orchestrates the layout of the site
const App = () => {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
};

// Export the App component for use in index.js
export default App;
