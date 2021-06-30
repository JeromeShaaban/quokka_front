import React, {  useEffect } from 'react';
import '../../style/pomodoro.css'

const Pomodoro = ({counter, setCounter}) => {
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, setCounter]);
  return (
    <div className="Counter">
      <p>{counter >= 20 && "The noblest pleasure is the joy of understanding. -- Leonardo da Vinci"}</p>
      <p>{counter >= 15 && counter < 20 && "Quality is more important than quantity. One home run is much better than two doubles. --  Steve Jobs "}</p>
      <p>{counter >= 10 && counter < 15 && "The knowledge of all things is possible. -- Leonardo da Vinci"}</p>
      <p>{counter >= 5 && counter < 10 && "The people who are crazy enough to think they can change the world are the ones who do. --  Steve Jobs "}</p>
      <p>{counter >= 1 && counter < 5 && "Learning never exhausts the mind. -- Leonardo da Vinci"}</p>
      <p className="Refill">{counter < 1 && "It's time to have a break and refill !"}</p>
    </div>
  );
};

export default Pomodoro;