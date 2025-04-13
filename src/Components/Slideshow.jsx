import React, { useState, useEffect } from 'react';
import './Slideshow.css';  // Import the CSS file

const images = [
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/pic5.jpg',
  '/pic6.jpg',
  '/pic7.jpg',
  '/pic8.jpg',
  '/pic9.jpg',
  '/pic10.jpg'
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="Birthday Slideshow"
        className="slideshow-image show"  // Apply class for styling
      />
    </div>
  );
};

export default Slideshow;
