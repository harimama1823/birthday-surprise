import React, { useState } from 'react';
import './App.css';
import AudioPlayer from './Components/AudioPlayer';
import PasswordGate from './Components/PasswordGate';
import BirthdayPage from './Components/BirthdayPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (isValid) => {
    if (isValid) {
      setIsAuthenticated(true);
    }
  };

  // Inline styling for background image (Homepage)
  const homepageStyle = {
    backgroundImage: 'url(/pic2.jpg)',  // Path to your image inside the public folder
    backgroundSize: 'contain',  // This ensures the image covers the screen completely
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100vh',  // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <div className="App">
      {/* If the user is not authenticated, show the PasswordGate component */}
      {!isAuthenticated ? (
        <div style={homepageStyle}>
          <PasswordGate onSuccess={handlePasswordSubmit} />
        </div>
      ) : (
        <>
          {/* If the user is authenticated, show BirthdayPage and AudioPlayer */}
          <BirthdayPage />
        </>
      )}
    </div>
  );
}

export default App;
