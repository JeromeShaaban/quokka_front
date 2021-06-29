import React, { useState, useContext } from 'react';
import BackgroundStars from './BackgroundStars';
import logo from '../assets/25minwhite.png';
import MusicPlayer from "./music_player/MusicPlayer"
import Loader from './loader/Loader';
import Pomodoro from './pomodoro/pomodoro';
import '../style/pomodoroMusic.css'
import SlideMenu from '../components/menu/Menu'
import MenuContext from "../contexts/MenuContext"

const PomodoroMusic = () => {
  const [counter, setCounter] = useState(25);
  const { open } = useContext(MenuContext);

  return (
    <div>
      <BackgroundStars />

      <SlideMenu/>
      {!open && ( 
        <>
      <img src={logo} alt="logo" className="Logo"/>
      <MusicPlayer />
      <div className="Container">
        <Pomodoro counter={counter} setCounter={setCounter}/>
        <Loader counter={counter} setCounter={setCounter} />
      </div>
      </>
      )}
    </div>
  );
};

export default PomodoroMusic;