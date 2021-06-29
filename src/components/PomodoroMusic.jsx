import React, { useState, useContext } from 'react';

import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/Pomodoro';
import BoobaQuotes from './pomodoro/BoobaQuotes';
import '../style/pomodoroMusic.css'
import SlideMenu from '../components/menu/Menu'
import MenuContext from "../contexts/MenuContext"

const PomodoroMusic = () => {
  const [counter, setCounter] = useState(25);
  const { open } = useContext(MenuContext);

  return (
    <div>
      <SlideMenu/>
      {!open && ( 
      <>
        <div className="Container">
          <Pomodoro counter={counter} setCounter={setCounter}/>
          <Loader counter={counter} setCounter={setCounter} />
        </div>
        <MusicPlayer />
        <BoobaQuotes />
      </>
      )}
    </div>
  );
};

export default PomodoroMusic;