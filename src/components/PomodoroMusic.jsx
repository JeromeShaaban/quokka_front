import React from 'react';
import '../style/pomodoroMusic.css';
import BackgroundStars from './BackgroundStars';

const PomodoroMusic = () => {
  return (
    <div>
      <BackgroundStars />
      <h1 id="title">25</h1>
      <img src="../assets/25minwhite.png" alt="logo" />
    </div>
  );
};

export default PomodoroMusic;