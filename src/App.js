// src/Greeting.js
import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch('http://localhost:3001/random_greeting');
        const data = await response.json();
        setGreeting(data.greeting); // Assuming the API response has a 'greeting' property
      } catch (error) {
      }
    };

    // Call the fetchGreeting function
    fetchGreeting();
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      <h2>Greeting: {greeting}</h2>
      {/* Additional JSX for your component */}
    </div>
  );
};

export default Greeting;