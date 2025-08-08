import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>
      
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle-btn"
      >
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
      </ul>
    </nav>
  );
};

export default Navbar;
