import React from "react";

import "./in-game-menu.styles.scss";

import RestartConfirmation from "../restart-confirmation/restart-confirmation.component.tsx";
import QuitGameConfirmation from "../quit-game-confirmation/quit-game-confirmation.component.tsx";

const InGameMenu = ({
  setShowInGameMenu,
  setIsTimerPaused,
  resetGame,
  setCountdown,
  setShowResetConfirmation,
  setShowQuitConfirmation,
}) => {
  const continueGame = () => {
    setShowInGameMenu(false);
    setIsTimerPaused(false);
  };

  const confirmReset = () => {
    setShowInGameMenu(false);
    setShowResetConfirmation(true);
    return (
      <RestartConfirmation
        resetGame={resetGame}
        setShowResetConfirmation={setShowResetConfirmation}
        setIsTimerPaused={setIsTimerPaused}
        setCountdown={setCountdown}
      />
    );
  };

  const quitGame = () => {
    setShowInGameMenu(false);
    setShowQuitConfirmation(true);
  };

  return (
    <div className="in-game-menu-container">
      <div className="in-game-menu">
        <p className="in-game-menu-text">PAUSE</p>
        <button className="in-game-menu-button-white" onClick={continueGame}>
          CONTINUE GAME
        </button>
        <button className="in-game-menu-button-white" onClick={confirmReset}>
          RESTART
        </button>
        <button className="in-game-menu-button-red" onClick={quitGame}>QUIT GAME</button>
      </div>
    </div>
  );
};

export default InGameMenu;
