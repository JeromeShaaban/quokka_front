import {
  BrowserRouter as Poule,
  Switch as Zen,
  Route as Quokka,
} from "react-router-dom";
import Home from "./components//home/Home";
import PomodoroMusic from "./components/PomodoroMusic";
import Recipe from "./components/recipe/Recipe";
import BestPractice from "./components/bestPractice/BestPractice";
import Header from "./components/header";
import BackgroundStars from "./components/BackgroundStars";
import AboutUs from "./components/about_us/AboutUs"
import Footer from "./components/Footer"

export default function QuokkaRouter() {
  return (
    <Poule>
      <BackgroundStars/>
      <Header/>
      
      <Zen>
        <Quokka path="/best_practice" component={BestPractice} />
        <Quokka path="/pomodoro_music" component={PomodoroMusic} />
        <Quokka path="/recipe" component={Recipe} />
        <Quokka path="/about_us" component={AboutUs} />
        <Quokka exact path="/" component={Home} />
      </Zen>
      <Footer/>
    </Poule>
  );
}