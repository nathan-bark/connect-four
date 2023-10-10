import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import Rules from './Rules/Rules';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
