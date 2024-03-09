import React from 'react';
import './Header.css';

// Header component that displays the site's main heading and introduction
const Header = () => {
  return (
    <header className="site-header">
      <h1>Welcome to NCAA Basketball Hub</h1>
      <p>
        Explore teams, mascots, and locations across the NCAA basketball
        landscape. <br></br>If your borwser supports it, use CTRL + F to search
        using keywords.
      </p>
    </header>
  );
};

// Export the component for use in other parts of the app
export default Header;
