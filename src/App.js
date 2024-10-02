import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainMenu from './routes/main-menu/main-menu.component.tsx';
import GameRules from './routes/game-rules/game-rules.component.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game-rules" element={<GameRules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
