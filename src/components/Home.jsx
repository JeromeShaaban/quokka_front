import '../style/home.scss'
import BackgroundStars from './BackgroundStars'

export default function Home () {
  return(
  <div className="container">
    <BackgroundStars/>
    <div id="home">
      <h1>Pomodoro</h1>
      <div className="back">
      </div>
    </div>
  </div>
  )
}