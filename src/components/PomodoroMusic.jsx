import React from 'react';
import '../style/pomodoroMusic.css';
import BackgroundStars from './BackgroundStars';
import logo from '../assets/25minwhite.png';
import MusicPlayer from "./music_player/MusicPlayer"

const PomodoroMusic = () => {
  return (
    <div>
      <BackgroundStars />
      <img src={logo} alt="logo" />
      <MusicPlayer />
    </div>
  );
};

export default PomodoroMusic;