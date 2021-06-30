import React, {useEffect, useState} from 'react';
import '../../style/loader/loader.scss'
import Rest from './Rest';
import Study from './Study'

// const pomodoroTimer = 25

export default function Loader ( {counter, setCounter}){
  const [isRest, setIsRest] = useState(false)

  
  useEffect(() => {
    const updateTimer = () => {
     counter > 0 ? setCounter(counter - 1) : setIsRest(true) 
    }
    
    const timer = setTimeout(() => {
      updateTimer()
    }, 1000);
    return () => {
      clearTimeout(timer)
    };
  }, [counter, setCounter]);

  return (
  <div className="coffeeContainer">
    {isRest ? <Rest setIsRest={setIsRest} setCounter={setCounter} />: <Study /> }
  </div>)
}