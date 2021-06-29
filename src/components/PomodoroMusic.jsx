import React from 'react';
import '../style/pomodoroMusic.css';
import BackgroundStars from './BackgroundStars';
import logo from '../assets/25minwhite.png';

const PomodoroMusic = () => {
  return (
    <div>
      <BackgroundStars />
      <img src={logo} alt="logo" />
    </div>
  );
};

export default PomodoroMusic;