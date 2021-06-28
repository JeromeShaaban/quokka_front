import './App.css';
import BackgroundStars from './components/BackgroundStars';
import Loader from './components/loader/Loader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundStars/>
        <Loader/>
      </header>
    </div>
  );
}

export default App;
