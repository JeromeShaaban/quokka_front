import React, { useState, useEffect } from 'react';
import '../../style/pomodoro.css'

const Pomodoro = () => {
  const [counter, setCounter] = useState(25);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div className="Counter">
      <p>{counter >= 20 && "The noblest pleasure is the joy of understanding. -- Leonardo da Vinci"}</p>
      <p>{counter >= 15 && counter < 20 && "The knowledge of all things is possible. -- Leonardo da Vinci"}</p>
      <p>{counter >= 10 && counter < 15 && "Learning never exhausts the mind. -- Leonardo da Vinci"}</p>
      <p>{counter >= 5 && counter < 10 && "Quality is more important than quantity. One home run is much better than two doubles."}</p>
      <p>{counter >= 1 && counter < 5 && "The people who are crazy enough to think they can change the world are the ones who do."}</p>
      <p className="Refill">{counter < 1 && "It's time to have a break and refill !"}</p>
    </div>
  );
};

export default Pomodoro;