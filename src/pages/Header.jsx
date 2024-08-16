// src/Header.jsx
import React from 'react';
import './CSS Folders/Header.css'; // Ensure you create this CSS file for styling

function Header() {
  return (
    <header className="header fixed top-0 left-0 w-full z-10 bg-pink-200 p-4 text-gray-800">
      <nav className="nav flex justify-center items-center h-full">
        <ul className="nav-list flex list-none p-0 m-0">
          <li className="nav-item mx-4">
            <a 
              className="nav-link text-gray-800 text-lg hover:text-pink-600 hover:underline transition-colors duration-300"
              href="https://www.messenger.com/t/100000683513983" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Click this text to chat with your forever
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
