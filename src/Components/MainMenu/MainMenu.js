/**
 * Renders a main menu with a logo image and two buttons.
 * @returns {JSX.Element} The main menu component.
 */

import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import playerVsPlayer from '../../assets/images/player-vs-player.svg'
import "./MainMenu.css";




const MainMenu = () => {
  const navigate = useNavigate();
  const ruleClick = () => navigate('/rules');
  const gamePlayerClick = () => navigate('/player-vs-player');

  return (
    <div className="main-container">
      <div className="container">
        {/* div with small logo image and two buttons to go centrally on page */}
        <img className="image" src={logo} alt="Logo" />
        <button className="button play" onClick={gamePlayerClick}>PLAY VS PLAYER<img className="player-img" src={playerVsPlayer} alt=""/> </button>
        <button className="button rules" onClick={ruleClick}>GAME RULES</button>
      </div>
    </div>
  );
};

export default MainMenu;
