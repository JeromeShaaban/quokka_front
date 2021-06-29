import React, { useState } from 'react';

import BackgroundStars from './BackgroundStars';
import logo from '../assets/25minwhite.png';
import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/Pomodoro';
import BoobaQuotes from './pomodoro/BoobaQuotes';
import '../style/pomodoroMusic.css'

const PomodoroMusic = () => {
  const [counter, setCounter] = useState(25);

  return (
    <div>
      <BackgroundStars />
      <img src={logo} alt="logo" className="Logo"/>
      <MusicPlayer />
      <div className="Container">
        <Pomodoro counter={counter} setCounter={setCounter}/>
        <Loader counter={counter} setCounter={setCounter} />
      </div>
      <BoobaQuotes />
    </div>
  );
};

export default PomodoroMusic;