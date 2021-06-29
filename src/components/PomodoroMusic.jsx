import React, { useState } from 'react';

import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/pomodoro';
import '../style/pomodoroMusic.css'

const PomodoroMusic = () => {
  const [counter, setCounter] = useState(25);

  return (
    <div>
      <MusicPlayer />
      <div className="Container">
        <Pomodoro counter={counter} setCounter={setCounter}/>
        <Loader counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default PomodoroMusic;