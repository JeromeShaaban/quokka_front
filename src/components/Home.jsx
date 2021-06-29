import '../style/home.scss'
import {useContext} from 'react'
import MenuContext from '../contexts/MenuContext'
import BackgroundStars from './BackgroundStars'
import SlideMenu from '../components/menu/Menu'
import homeImg from '../assets/workers.png'


export default function Home () {
  const { open } = useContext(MenuContext);

  return(
    <>
  <div className="homeContainer">
    <SlideMenu/>
    {!open && (

      <div id="home" className="homeContainer">
        <img src={homeImg}/>
        <div >
        <h3>You've been working for hours? <br/> Your back hurts, your eyes burn, <br/> you can't think straight?</h3>
        <h3>Take a break!</h3>
        <h3>This app will teach you how to relax,  <br/> set up properly, fuel yourself  <br/> and then use a timer <br/> to work as efficiently as possible.</h3>
        </div>
        </div>

    )}  
  </div>
  </>

  )
}