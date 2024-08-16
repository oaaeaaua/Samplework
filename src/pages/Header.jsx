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
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
