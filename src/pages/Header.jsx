// src/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS Folders/Header.css'; // Ensure you create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="https://www.messenger.com/t/100000683513983" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Click to be with your forever
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;