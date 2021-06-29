import '../style/home.scss'
import BackgroundStars from './BackgroundStars'
import SlideMenu from '../components/menu/Menu'

export default function Home () {
  return(
  <div className="container">
    <BackgroundStars/>
    <SlideMenu/>
    <div id="home">
      <h1>Pomodoro</h1>
      <div className="back">
      </div>
    </div>
  </div>
  )
}