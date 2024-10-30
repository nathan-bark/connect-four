/// <reference path="../../assets/images/index.d.ts" />

import React from "react";

import "./game-header.styles.scss";

import logo from "../../assets/images/logo.svg";

const GameHeader = ({
  setShowResetConfirmation,
  setIsTimerPaused,
  setShowInGameMenu,
}) => {
  const confirmResetToggleOn = () => {
    setShowResetConfirmation(true);
    setIsTimerPaused(true);
  };

  const showInGameMenuToggle = () => {
    setShowInGameMenu(true);
    setIsTimerPaused(true);
  };

  return (
    <div className="game-header">
      <button className="menu-button" onClick={showInGameMenuToggle}>MENU</button>
      <img src={logo} alt="logo" />
      <button className="restart-button" onClick={confirmResetToggleOn}>
        RESTART
      </button>
    </div>
  );
};

export default GameHeader;
