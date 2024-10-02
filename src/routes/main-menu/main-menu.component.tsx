//Imports
import React from "react";
import { Link } from "react-router-dom";

import "./main-menu.styles.scss";
import logo from "../../assets/images/logo.svg";
import twoPLayers from "../../assets/images/player-vs-player.svg";

//Main Component
const MainMenu = () => {
  return (
    <div className="main-menu-container">
      <div className="main-menu">
        <img className="main-menu-logo" src={logo} alt="logo" />
        <div className="main-menu-buttons">
          <button className="vs-player-button">
            PLAY VS PLAYER <img src={twoPLayers} alt="2 player icon" />
          </button>
          <button className="game-rules-button"><Link to="/game-rules">GAME RULES</Link></button>
        </div>
      </div>
    </div>
  );
};

//Exports
export default MainMenu;
