import {
  BrowserRouter as Router,
  Switch as Zen,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import PomodoroMusic from "./components/PomodoroMusic";

export default function QuokkaRouter() {
  return (
    <Router>
      <Zen>
        <Route path="/pomodoro_music" component={PomodoroMusic} />
        <Route exact path="/" component={Home} />
      </Zen>
    </Router>
  );
}