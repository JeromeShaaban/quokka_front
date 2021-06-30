import {useEffect} from 'react';
import MillImg from '../../assets/coffee_mill.png'

export default function Rest ({setIsRest ,setCounter}) {
  useEffect(() => {
    return () => {
      setCounter(25)
    };
  }, [setCounter]);

  const handleClick = () => {
    setIsRest(false)
  }
return(
  <>
  <div id="mill">
      <img src={MillImg} alt="coffee-mill" />
  </div>
      <button className="readyButton" onClick={() => {handleClick()}}>Ready</button>
  </>)
  
}