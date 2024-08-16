// src/pages/Home.jsx
import React, { useState } from 'react';
import Button from '../components/button';

function Home() {
  // Initialize state with an array of messages
  const [messages, setMessages] = useState([
    'Hello love',
    'Kamusta?',
    'Alam kong pagod na u',
    'Stress na u sa pressure sa school',
    'Jan sa bahay',
    'Pero tandaan mo',
    'Nandito lang me ha',
    'I love you',


  ]);

  // Track the current message index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showFirstButton, setShowFirstButton] = useState(true);


  const handleClick = () => {
    if (messages[currentIndex] === 'I love you') {
      setShowSecondButton(true); // Show the second button when the final message is displayed
      setShowFirstButton(false);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }
  };

  const handleSecondButtonClick = () => {
    alert('MAHAL NA MAHAL ULIT KITA!!');
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">{messages[currentIndex]}</h1>

      {showFirstButton && (<Button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Click mo ito
      </Button>)}

      
      {showSecondButton && (
        <Button
          onClick={(handleSecondButtonClick)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Click mo last na
        </Button>
      )}
    </div>
  );
}

export default Home;