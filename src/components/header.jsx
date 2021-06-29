import icon from '../assets/25minwhite.png'
import { useHistory } from "react-router-dom";

  export default function Header () {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})

    history.push("/");
  }
  return (
    <div className="header">
    <img className="header-img" alt="header" onClick={(e) =>handleClick(e)} src={icon}></img>
    </div>
  )
}