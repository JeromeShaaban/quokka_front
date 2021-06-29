import React from 'react';
import BackgroundStars from './BackgroundStars';
import logo from '../assets/25minwhite.png';
import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/pomodoro';
import '../style/pomodoroMusic.css'

const PomodoroMusic = () => {
  return (
    <div>
      <BackgroundStars />
      <img src={logo} alt="logo" className="Logo"/>
      <MusicPlayer />
      <div className="Container">
        <Pomodoro />
        <Loader />
      </div>
    </div>
  );
};

export default PomodoroMusic;