// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">Akankshya</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="toggle"
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="toggle">🌙</label>
      </div>
    </nav>
  );
}

export default Navbar;
