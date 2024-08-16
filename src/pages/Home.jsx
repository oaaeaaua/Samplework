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

  // Function to update the message when the button is clicked
  const handleClick = () => {
    // Move to the next message, looping back to the first one if needed
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">{messages[currentIndex]}</h1>
      <Button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Click mo ito
      </Button>
    </div>
  );
}

export default Home;
