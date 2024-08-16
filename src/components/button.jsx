// src/components/Button.jsx
import React from 'react';
import './CSS folders/button.css'; // Import the CSS file for styling

const Button = ({ onClick, children, style }) => {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
