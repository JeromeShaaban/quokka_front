import icon from '../assets/25minwhite.png'
import { useHistory } from "react-router-dom";

  export default function Header () {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault()

    history.push("/");
  }
  return (
    <>
    <img className="header-img" alt="header" onClick={(e) =>handleClick(e)} src={icon}></img>
    </>
  )
}