import {useEffect} from 'react';
import MillImg from '../../assets/coffee_mill.png'

export default function ({setIsRest ,setCounter}) {
  useEffect(() => {
    return () => {
      setCounter(25)
    };
  }, []);

  const handleClick = () => {
    setIsRest(false)
  }
return(
  <>
  <div id="mill">
      <img src={MillImg} />
  </div>
      <button className="readyButton" onClick={() => {handleClick()}}>Ready</button>
  </>)
  
}