import { useHistory } from "react-router";

export default function Module ({title, desc, path}) {
  let history = useHistory();

  function handleClick(e, path) {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})

    history.push(path);
  }

  return(
    <div className="homeContainer module" >
      <h4 className="title" onClick={(e) => handleClick(e, path)}>{title}</h4>
      <p className="desc">{desc}</p>
    </div>

  )
}