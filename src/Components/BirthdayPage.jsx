import React, { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
import AudioPlayer from './AudioPlayer';
import { Fireworks } from '@fireworks-js/react';
import './BirthdayPage.css';

const BirthdayPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setShowLetter(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartParty = () => {
    setShowAudio(true);
    setShowFireworks(true);
  };

  return (
    <div className="birthday-page">
      {showWelcome && (
        <div className="welcome-message">
          <h2>Happiest Birthday ra Mama 💖</h2>
        </div>
      )}

      {showLetter && (
        <>
          <button className="start-btn-top" onClick={handleStartParty}>
            Start the Party!
          </button>

          <p>
            My Dearest Kukka 💌
            <br />

            First and foremost... a million happy returns of the day, my mamaluu 🎂🎈💕
            Even though we’re miles apart today, not even a heartbeat separates us by soul.
            You live in every thought of mine, in every smile I wear.

            I still remember the first time our hands met — the warmth, the spark, the magic... ✨🤝💫
            And every moment we've spent together since then has only made me fall deeper for you. 💖

            Every birthday, I was right by your side, whispering how much I love you —
            but today, even though I can't hold you, I’m holding you tighter in my heart. 🤍🎁

            Celebrate your day with laughter, joy, and all the love the universe can offer...
            But promise me one thing — miss me a little extra today. 🥺💭
            Because I’m right here, loving you a little more every second. 💞

            I love you more than words can ever say...
            And Mamaluuu, I’m falling for you harder than ever before.
            Forever yours, through every mile, every moment. 🌍💋🌙

            Happy Birthday my Kukka. 🐶💗🎉 💗
          </p>
          <Slideshow />
        </>
      )}

      {showAudio && <AudioPlayer />}

      {showFireworks && (
        <div className="fireworks-container">
          <Fireworks
            options={{
              speed: 3,
              acceleration: 1.05,
              friction: 0.95,
              gravity: 1.5,
              particles: 50,
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;
