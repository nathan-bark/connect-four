import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./Components/MainMenu/MainMenu";
import Rules from "./Components/Rules/Rules";
import GamePlayer from "./Components/GamePlayer/GamePlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/player-vs-player" element={<GamePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
