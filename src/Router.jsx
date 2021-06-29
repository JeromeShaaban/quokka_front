import {
  BrowserRouter as Router,
  Switch as Zen,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import PomodoroMusic from "./components/PomodoroMusic";
import BestPractice from "./components/bestPractice/BestPractice";

export default function QuokkaRouter() {
  return (
    <Router>
      <Zen>
        <Route path="/best_practice" component={BestPractice} />
        <Route path="/pomodoro_music" component={PomodoroMusic} />
        <Route exact path="/" component={Home} />
      </Zen>
    </Router>
  );
}