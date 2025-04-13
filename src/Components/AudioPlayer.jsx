import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/birthday.mp3" // Ensure this file exists in public/
      loop
      autoPlay
    />
  );
};

export default AudioPlayer;
