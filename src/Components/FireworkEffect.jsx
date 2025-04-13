import React, { useEffect } from 'react';
import Fireworks from 'fireworks-js'; // Ensure correct import

const FireworkEffect = () => {
  useEffect(() => {
    // Check if the container exists in the DOM
    let container = document.getElementById('fireworks-container');

    if (!container) {
      // Create a container dynamically if it does not exist
      container = document.createElement('div');
      container.id = 'fireworks-container';
      document.body.appendChild(container); // Append it to the body
    }

    // Initialize Fireworks
    const fireworksInstance = new Fireworks({
      container: container,  // Pass the correct container
      width: window.innerWidth,
      height: window.innerHeight,
    });

    fireworksInstance.start();  // Start the fireworks effect

    // Cleanup when component unmounts
    return () => {
      fireworksInstance.stop();  // Stop the fireworks
      if (container) {
        document.body.removeChild(container);  // Remove the container from the DOM
      }
    };
  }, []);

  return null;  // No UI is rendered by this component
};

export default FireworkEffect;
