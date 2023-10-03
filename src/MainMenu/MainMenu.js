/**
 * Renders a main menu with a logo image and two buttons.
 * @returns {JSX.Element} The main menu component.
 */

import logo from "../assets/images/logo.svg";
import playerVsPlayer from '../assets/images/player-vs-player.svg'
import "./MainMenu.css";

const MainMenu = () => {
  return (
    <div className="main-container">
      <div className="container">
        {/* div with small logo image and two buttons to go centrally on page */}
        <img className="image" src={logo} alt="Logo" />
        <button className="button play"  >PLAY VS PLAYER<img src={playerVsPlayer} alt=""/> </button>
        <button className="button rules">GAME RULES</button>
      </div>
    </div>
  );
};

export default MainMenu;
