import React from 'react';
import '../style/pomodoroMusic.css';
import '../style/backgroundStars.scss';
import MusicPlayer from "./music_player/MusicPlayer"

const PomodoroMusic = () => {
  return (
    <div className="bkg">
        <h1 id="title">25</h1>
        <MusicPlayer/>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="glows"></div>
    </div>
  );
};

export default PomodoroMusic;