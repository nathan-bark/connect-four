import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./Components/MainMenu/MainMenu";
import Rules from './Components/Rules/Rules';
import GamePlayer from './Components/GamePlayer/GamePlayer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/player-vs-player" element={<GamePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
