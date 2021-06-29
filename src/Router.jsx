import {
  BrowserRouter as Poule,
  Switch as Zen,
  Route,
} from "react-router-dom";
import Home from "./components//home/Home";
import PomodoroMusic from "./components/PomodoroMusic";
import Recipe from "./components/recipe/Recipe";
import BestPractice from "./components/bestPractice/BestPractice";
import Header from "./components/header";
import BackgroundStars from "./components/BackgroundStars";

export default function QuokkaRouter() {
  return (
    <Poule>
      <BackgroundStars/>
      <Header/>
      
      <Zen>
        <Route path="/best_practice" component={BestPractice} />
        <Route path="/pomodoro_music" component={PomodoroMusic} />
        <Route path="/recipe" component={Recipe} />
        <Route exact path="/" component={Home} />
      </Zen>
    </Poule>
  );
}