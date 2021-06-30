import {
  BrowserRouter as Poule,
  Switch as Zen,
  Route as Quokka,
} from "react-router-dom";
import {useContext} from "react";
import Home from "./components//home/Home";
import PomodoroMusic from "./components/PomodoroMusic";
import Recipe from "./components/recipe/Recipe";
import BestPractice from "./components/bestPractice/BestPractice";
import Header from "./components/header";
import BackgroundStars from "./components/BackgroundStars";
import AboutUs from "./components/about_us/AboutUs"
import Footer from "./components/Footer"
import SlideMenu from './components/menu/Menu'
import MenuContext from "./contexts/MenuContext";

export default function QuokkaRouter() {
  const { open } = useContext(MenuContext);

  return (
    <Poule>
      <BackgroundStars/>
      <SlideMenu />

      {!open &&  
      <>
      <Header/>
      <Zen>
        <div className="ContentWrapper">
         <Quokka path="/best_practice" component={BestPractice} />
          <Quokka path="/pomodoro_music" component={PomodoroMusic} />
          <Quokka path="/recipe" component={Recipe} />
          <Quokka path="/about_us" component={AboutUs} />
          <Quokka exact path="/" component={Home} />
        </div>
      </Zen>
      <Footer/>
      </>
      }
     
    </Poule>
  );
}