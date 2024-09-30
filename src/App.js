import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainMenu from './routes/main-menu/main-menu.component.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} >

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
