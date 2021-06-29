import '../style/home.scss'
import { useState } from 'react'
import BackgroundStars from './BackgroundStars'
import SlideMenu from '../components/menu/Menu'
import MenuContext from '../contexts/MenuContext'

export default function Home () {
  const [open, setOpen] = useState(false);

  return(
    <MenuContext.Provider value={{ open: open, setOpen: setOpen}}>
  <div className="homeContainer">
    <BackgroundStars/>
    <SlideMenu/>
    {!open && (

      <div id="home">
        <h3>You've been working for hours? <br/> Your back hurts, your eyes burn, <br/> you can't think straight?</h3>
        <h3>Take a break!</h3>
        <h3>This app will teach you how to relax,  <br/> set up properly, fuel yourself  <br/> and then use a timer <br/> to work as efficiently as possible.</h3>
    </div>

    )}  
  </div>
  </MenuContext.Provider>
  )
}