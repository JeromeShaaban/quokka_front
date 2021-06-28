import logo from './logo.svg';
import './App.css';
import BackgroundStars from './components/BackgroundStars';
import MusicPlayer from "./components/music_player/MusicPlayer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundStars/>
        <MusicPlayer/>
      </header>
    </div>
  );
}

export default App;
