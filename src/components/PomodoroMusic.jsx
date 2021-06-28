import React from 'react';
import '../style/pomodoroMusic.css';
import '../style/backgroundStars.scss';
import tomato_shape from '../assets/25minwhite.png';

const PomodoroMusic = () => {
  return (
    <div className="bkg">
      <h1 id="title">25</h1>
      <img src={tomato_shape} alt="tomato_shape" style={{width: "14%", height: "30%"}}/>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="glows"></div>
    </div>
  );
};

export default PomodoroMusic;