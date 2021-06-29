import React, {useEffect, useState} from 'react';
import '../../style/loader/loader.scss'
import Rest from './Rest';
import Study from './Study'

const pomodoroTimer = 10

export default function Loader ( ){
  const [timer, setTimer] = useState(pomodoroTimer)
  const [isRest, setIsRest] = useState(false)

   const updateTimer = () => {
    timer > 0 ? setTimer(timer - 1) : setIsRest(true)
   }

  useEffect(() => {
    
    const timer = setTimeout(() => {
      updateTimer()
    }, 1000);
    return () => {
      clearTimeout(timer)
    };
  }, [timer]);

  return (
  <div className="coffeeContainer">
    {isRest ? <Rest setIsRest={setIsRest} setTimer={setTimer} pomodoroTimer={pomodoroTimer}/>: <Study /> }
  </div>)
}