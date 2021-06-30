import React, { useState } from 'react';

import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/Pomodoro';
import BoobaQuotes from './pomodoro/BoobaQuotes';
import '../style/pomodoroMusic.css'



const PomodoroMusic = () => {
  const [counter, setCounter] = useState(25);

  return (
    <div>
  
        
          <div className="pomodoroBg">
            <h1 className="pomodoro_title">Pomodoro</h1>
            <p>Take a break every 25min to stay focused</p>
            <p>An empty cup of coffee needs to be reffiled !</p>
            <div className="PomodoroContainer">
              <Pomodoro counter={counter} setCounter={setCounter}/>
              <Loader counter={counter} setCounter={setCounter} />
            </div>
          </div>
          <div className="pomodoroBg">
            <MusicPlayer />
          </div>
          <BoobaQuotes />
        
      
    </div>
  );
};

export default PomodoroMusic;