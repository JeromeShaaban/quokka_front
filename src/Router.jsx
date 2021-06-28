import {
  BrowserRouter as Router,
  Switch as Zen,
  Route,
} from "react-router-dom";
import BackgroundStars from "./components/BackgroundStars";
import PomodoroMusic from "./components/PomodoroMusic";

export default function QuokkaRouter() {
  return (
    <Router>
      <Zen>
        <Route path="/pomodoro_music" component={PomodoroMusic} />
        <Route exact path="/" component={BackgroundStars} />
      </Zen>
      <Footer />
    </Router>
  );
}